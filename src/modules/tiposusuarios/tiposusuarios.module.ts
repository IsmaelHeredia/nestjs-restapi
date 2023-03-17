import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TiposUsuarioService } from './tiposusuarios.service';
import { TiposUsuarioController } from './tiposusuarios.controller';
import { TiposUsuario, TiposUsuarioSchema } from './entities/tiposusuario.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TiposUsuario.name, schema: TiposUsuarioSchema }]), 
  ],
  controllers: [TiposUsuarioController],
  providers: [TiposUsuarioService]
})
export class TiposUsuarioModule {}
