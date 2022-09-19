import { Injectable, Logger } from '@nestjs/common';
import { IDataServices } from 'src/core';

@Injectable()
export class DeathCauseUseCaseService {

  private readonly logger = new Logger(DeathCauseUseCaseService.name);

  constructor(
    private readonly dataServices: IDataServices,
  ) { }
  
  async getDeathCauses() {
    this.logger.log('Getting all death causes');
    return await this.dataServices.deathCauses.getAll();
  }

  async getDeathCause(id: string) {
    this.logger.log(`Getting death cause with id ${id}`);
    return await this.dataServices.deathCauses.get(id);
  }

  async getDeathCauseByDiseaseId(diseaseId: string) {
    this.logger.log(`Getting death cause with disease id ${diseaseId}`);
    return await this.dataServices.deathCauses.getAll({ causeId: diseaseId }, 'causeId');
  }

}
