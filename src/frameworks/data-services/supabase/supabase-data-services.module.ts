import { Module } from "@nestjs/common";
import { IDataServices } from "src/core";
import { SupabaseDataService } from "./supabase-data-services.service";

@Module({
  providers: [
    {
      provide: IDataServices,
      useClass: SupabaseDataService,
    },
  ],
  exports: [IDataServices],
})
export class SupabaseDataServicesModule {}