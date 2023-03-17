import { Module } from '@nestjs/common';
import { AccesoService } from './acceso.service';
import { AccesoController } from './acceso.controller';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuario, UsuarioDocument } from '../usuarios/entities/usuario.entity';
import { Model } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants';

@Module({
  controllers: [AccesoController],
  providers: [AccesoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: Usuario,
      },
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '20h'}
    })
  ]
})
export class AccesoModule {}
