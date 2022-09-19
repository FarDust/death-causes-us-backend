import { Controller, Get, Param } from '@nestjs/common';
import { REST_ROUTES } from 'src/constants/routes';
import { DeathCauseUseCaseService } from 'src/use-cases/death-cause/death-cause.use-case';
import { DiseaseUseCaseService } from 'src/use-cases/disease/disease.use-case';

@Controller(REST_ROUTES.diseases.base)
export class DiseasesController {
  constructor(
    private readonly deathCauseUseCaseService: DeathCauseUseCaseService,
    private readonly diseaseUseCaseService: DiseaseUseCaseService,
  ) { }
  
  @Get(`/${REST_ROUTES.diseases.getAll}`)
  async getDiseases() {
    return await this.diseaseUseCaseService.getDiseases();
  } 

  @Get(`${REST_ROUTES.diseases.getOne}`)
  async getDisease(@Param('id') id: string) {
    return await this.diseaseUseCaseService.getDisease(id);
  }

  @Get(`${REST_ROUTES.diseases.getOne}/death-causes`)
  async getDeathCausesByDiseaseId(@Param('id') diseaseId: string) {
    return await this.deathCauseUseCaseService.getDeathCauseByDiseaseId(diseaseId);
  }
}
