import { Req } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TiposUsuarioService } from './tiposusuarios.service';
import { CreateTiposUsuarioDto } from './dto/create-tiposusuario.dto';
import { UpdateTiposUsuarioDto } from './dto/update-tiposusuario.dto';

@Controller('tiposusuario')
@ApiTags('tipousuario')
export class TiposUsuarioController {
  constructor(private readonly tiposUsuarioService: TiposUsuarioService) {}

  @Post()
  create(@Body() createTipoUsuarioDto: CreateTiposUsuarioDto) {
    return this.tiposUsuarioService.create(createTipoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.tiposUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposUsuarioService.findOne(id); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoUsuarioDto: UpdateTiposUsuarioDto) {
    return this.tiposUsuarioService.update(id, updateTipoUsuarioDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposUsuarioService.remove(id); 
  }
}
