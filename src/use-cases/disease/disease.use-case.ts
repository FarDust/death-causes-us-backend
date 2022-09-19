import { Injectable, Logger } from '@nestjs/common';
import { IDataServices } from 'src/core';

@Injectable()
export class DiseaseUseCaseService {

  private readonly logger = new Logger(DiseaseUseCaseService.name);

  constructor(
    private readonly dataServices: IDataServices,
  ) { }
  
  async getDiseases() {
    this.logger.log('Getting all death causes');
    return await this.dataServices.diseases.getAll();
  }

  async getDisease(id: string) {
    this.logger.log(`Getting death cause with id ${id}`);
    return await this.dataServices.diseases.get(id);
  }

}
