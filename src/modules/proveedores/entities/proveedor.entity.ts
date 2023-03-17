import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProveedorDocument = Proveedor & Document;

@Schema()
export class Proveedor {

    @Prop({required:true,unique: true})
    nombre: string;

    @Prop({required:true})
    direccion: string;

    @Prop({required:true})
    telefono: number;

    @Prop({required:false})
    fecha_registro: string;

}

export const ProveedorSchema = SchemaFactory.createForClass(Proveedor)