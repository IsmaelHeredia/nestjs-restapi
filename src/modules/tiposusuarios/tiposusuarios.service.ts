import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTiposUsuarioDto } from './dto/create-tiposusuario.dto';
import { UpdateTiposUsuarioDto } from './dto/update-tiposusuario.dto';
import { TiposUsuario, TiposUsuarioDocument } from './entities/tiposusuario.entity';
import { Model } from 'mongoose';

@Injectable()
export class TiposUsuarioService {

  constructor( 
    @InjectModel(TiposUsuario.name) private readonly tiposUsuarioModel: Model<TiposUsuarioDocument>, 
  ) {}

  async create(createTiposUsuarioDto: CreateTiposUsuarioDto): Promise<TiposUsuario> { 
    return this.tiposUsuarioModel.create(createTiposUsuarioDto); 
  }

  async findAll(): Promise<TiposUsuario[]> { 
    return this.tiposUsuarioModel.find().exec();
  }

  async findOne(id: string): Promise<TiposUsuario> { 
    return this.tiposUsuarioModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateTiposUsuarioDto: UpdateTiposUsuarioDto): Promise<TiposUsuario> { 
    return this.tiposUsuarioModel.findOneAndUpdate({ _id: id }, updateTiposUsuarioDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.tiposUsuarioModel.findByIdAndRemove({ _id: id }).exec(); 
  }

}
