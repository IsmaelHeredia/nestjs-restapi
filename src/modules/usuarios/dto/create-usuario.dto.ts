import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
    nombre: string;
    clave: string;
    tipo: string;
    fecha_registro: string;
}
