import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductoDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsString()
    @IsNotEmpty()
    proveedor: string;

    @IsString()
    @IsNotEmpty()
    fecha_registro: string;

}
