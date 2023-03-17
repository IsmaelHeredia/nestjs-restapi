import { Test, TestingModule } from '@nestjs/testing';
import { TiposusuariosService } from './tiposusuarios.service';

describe('TiposusuariosService', () => {
  let service: TiposusuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposusuariosService],
    }).compile();

    service = module.get<TiposusuariosService>(TiposusuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
