import { Module } from '@nestjs/common';
import { SupabaseDataServicesModule } from 'src/frameworks/data-services/supabase/supabase-data-services.module';

@Module({
  imports: [SupabaseDataServicesModule],
  exports: [SupabaseDataServicesModule],
})
export class DataServicesModule {}