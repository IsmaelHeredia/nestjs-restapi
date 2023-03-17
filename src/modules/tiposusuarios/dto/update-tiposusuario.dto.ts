import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposUsuarioDto } from './create-tiposusuario.dto';

export class UpdateTiposUsuarioDto extends PartialType(CreateTiposUsuarioDto) {}
