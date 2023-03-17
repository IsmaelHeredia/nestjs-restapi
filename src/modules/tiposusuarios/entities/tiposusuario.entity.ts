import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TiposUsuarioDocument = TiposUsuario & Document;

@Schema()
export class TiposUsuario {

    @Prop({required:true,unique: true})
    nombre: string;

}

export const TiposUsuarioSchema = SchemaFactory.createForClass(TiposUsuario)