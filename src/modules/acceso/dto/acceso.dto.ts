import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class IngresoDto {
  nombre: string;
  clave: string;
}