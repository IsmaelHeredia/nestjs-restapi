import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProveedoreDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsNumber()
    @IsNotEmpty()
    telefono: number;

    @IsString()
    @IsNotEmpty()
    fecha_registro: string;

}
