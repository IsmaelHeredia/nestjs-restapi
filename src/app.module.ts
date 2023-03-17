import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { TiposUsuarioModule } from './modules/tiposusuarios/tiposusuarios.module';
import { ProductosModule } from './modules/productos/productos.module';
import { ProveedoresModule } from './modules/proveedores/proveedores.module';
import { AccesoModule } from './modules/acceso/acceso.module';
import { JwtStrategy } from './modules/acceso/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/sistemaNestJS'),
    UsuariosModule,
    TiposUsuarioModule,
    ProductosModule,
    ProveedoresModule,
    AccesoModule,
  ],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
