import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccesoService } from './acceso.service';
import { IngresoDto } from './dto/acceso.dto';

@Controller('acceso')
export class AccesoController {
  constructor(private readonly accesoService: AccesoService) {}

  @Post()
  ingreso(@Body() createAccesoDto: IngresoDto) {
    return this.accesoService.ingreso(createAccesoDto);
  }
  
}
