import { Test, TestingModule } from '@nestjs/testing';
import { DeathCauseUseCaseService } from './death-cause.use-case';

describe('DeathCauseUseCaseService', () => {
  let service: DeathCauseUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeathCauseUseCaseService],
    }).compile();

    service = module.get<DeathCauseUseCaseService>(DeathCauseUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
