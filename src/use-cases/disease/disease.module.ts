import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { DiseaseUseCaseService } from './disease.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [DiseaseUseCaseService],
  exports: [DiseaseUseCaseService],
})
export class DiseaseUseCaseModule {}