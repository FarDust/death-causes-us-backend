import { Test, TestingModule } from '@nestjs/testing';
import { DeathCausesController } from './death-causes.controller';

describe('DeathCausesController', () => {
  let controller: DeathCausesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeathCausesController],
    }).compile();

    controller = module.get<DeathCausesController>(DeathCausesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
