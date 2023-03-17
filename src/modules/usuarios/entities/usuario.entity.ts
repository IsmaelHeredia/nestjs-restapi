import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {

    @Prop({required:true,unique: true})
    nombre: string;

    @Prop({required:true})
    clave: string;

    @Prop({required:true})
    tipo: string;

    @Prop({required:true})
    fecha_registro: string;

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario)