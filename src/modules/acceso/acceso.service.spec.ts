import { Test, TestingModule } from '@nestjs/testing';
import { AccesoService } from './acceso.service';

describe('AccesoService', () => {
  let service: AccesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccesoService],
    }).compile();

    service = module.get<AccesoService>(AccesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
