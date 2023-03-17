import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IngresoDto } from './dto/acceso.dto';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from '../usuarios/entities/usuario.entity';
import { UsuariosService } from '../usuarios/usuarios.service';
var bcrypt = require("bcryptjs");
import { JwtService } from '@nestjs/jwt';

require("dotenv").config();

@Injectable()
export class AccesoService {

  
  constructor( 
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<UsuarioDocument>, 
    private jwtService:JwtService
  ) {}

  public async ingreso(userLoginBody: IngresoDto) {
    const { clave } = userLoginBody;

    const usuario = await this.usuarioModel.findOne({
      nombre: userLoginBody.nombre,
    });

    if (!usuario) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    if(bcrypt.compareSync(clave, usuario.clave)) {

      const payload = {
        id:  usuario._id,
        usuario: usuario.nombre,
        tipo : usuario.tipo
      };

      const token = this.jwtService.sign(payload);

      const usuarioContenido = usuario.toObject();

      const informacion = {
        token,
        usuario: usuarioContenido,
      };

      return informacion;

    } else {
      throw new HttpException('PASSWORD_INVALID', HttpStatus.CONFLICT);
    }

  }
  

}
