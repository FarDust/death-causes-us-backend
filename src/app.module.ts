import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { DeathCauseUseCasesModule } from './use-cases/death-cause/death-cause.module';
import { DeathCausesController } from './controllers/death-causes/death-causes.controller';
import { DiseasesController } from './controllers/diseases/diseases.controller';
import { DiseaseUseCaseModule } from './use-cases/disease/disease.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    DeathCauseUseCasesModule,
    DiseaseUseCaseModule
  ],
  controllers: [AppController, DeathCausesController, DiseasesController],
  providers: [],
})
export class AppModule {}
