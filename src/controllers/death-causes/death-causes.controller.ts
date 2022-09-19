import { Controller, Get, Param } from '@nestjs/common';
import { REST_ROUTES } from 'src/constants/routes';
import { DeathCauseUseCaseService } from 'src/use-cases/death-cause/death-cause.use-case';

@Controller(REST_ROUTES.deathCauses.base)
export class DeathCausesController {
  constructor(
    private readonly deathCauseUseCaseService: DeathCauseUseCaseService,
  ) { }
  
  @Get(`/${REST_ROUTES.deathCauses.getAll}`)
  async getDeathCauses() {
    return await this.deathCauseUseCaseService.getDeathCauses();
  }

  @Get(`${REST_ROUTES.deathCauses.getOne}`)
  async getDeathCause(@Param('id') id: string) {
    return await this.deathCauseUseCaseService.getDeathCause(id);
  }
  
}
