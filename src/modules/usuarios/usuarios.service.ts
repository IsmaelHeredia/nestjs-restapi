import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, UsuarioDocument } from './entities/usuario.entity';
import { Model } from 'mongoose';

var bcrypt = require("bcryptjs");

@Injectable()
export class UsuariosService {

  constructor( 
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<UsuarioDocument>, 
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> { 

    const { clave, fecha_registro, ...datos } = createUsuarioDto;

    var salto = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(clave, salto);  

    const datosUsuario = {
      ...datos,
      clave: hash,
      fecha_registro : new Date().toJSON().slice(0, 10)
    };

    const nuevoUsuario = await this.usuarioModel.create(datosUsuario);

    return nuevoUsuario;
  }

  async findAll(): Promise<Usuario[]> { 
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string): Promise<Usuario> { 
    return this.usuarioModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> { 
    return this.usuarioModel.findOneAndUpdate({ _id: id }, updateUsuarioDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.usuarioModel.findByIdAndRemove({ _id: id }).exec(); 
  }

}
