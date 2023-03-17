import { Test, TestingModule } from '@nestjs/testing';
import { TiposusuariosController } from './tiposusuarios.controller';
import { TiposusuariosService } from './tiposusuarios.service';

describe('TiposusuariosController', () => {
  let controller: TiposusuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposusuariosController],
      providers: [TiposusuariosService],
    }).compile();

    controller = module.get<TiposusuariosController>(TiposusuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
