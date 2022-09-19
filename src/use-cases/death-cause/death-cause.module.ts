import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { DeathCauseUseCaseService } from './death-cause.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [DeathCauseUseCaseService],
  exports: [DeathCauseUseCaseService],
})
export class DeathCauseUseCasesModule {}