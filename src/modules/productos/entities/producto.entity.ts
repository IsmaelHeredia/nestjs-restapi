import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {

    @Prop({required:true,unique: true})
    nombre: string;

    @Prop({required:true})
    descripcion: string;

    @Prop({required:true})
    precio: number;

    @Prop({required:true})
    proveedor: string;

    @Prop({required:false})
    fecha_registro: string;

}

export const ProductoSchema = SchemaFactory.createForClass(Producto)