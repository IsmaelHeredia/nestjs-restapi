import { Test, TestingModule } from '@nestjs/testing';
import { AccesoController } from './acceso.controller';
import { AccesoService } from './acceso.service';

describe('AccesoController', () => {
  let controller: AccesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccesoController],
      providers: [AccesoService],
    }).compile();

    controller = module.get<AccesoController>(AccesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
