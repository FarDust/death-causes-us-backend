import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabaseConfig } from 'src/configuration/supabase';
import { IDataServices, IGenericRepository } from 'src/core';
import { DeathCause, Disease } from './model'; 
import { DeathCause as DeathCauseEntity, Disease as DiseaseEntity } from 'src/core';
import { SupabaseGenericRepository } from './supabase-generic-respository';

@Injectable()
export class SupabaseDataService
  implements IDataServices, OnApplicationBootstrap
{
  diseases: IGenericRepository<Disease>;
  deathCauses: IGenericRepository<DeathCause>;

  private _supabase: SupabaseClient;

  onApplicationBootstrap() {
    this._supabase = createClient(supabaseConfig['url'], supabaseConfig['key']);
    this.deathCauses = new SupabaseGenericRepository<DeathCause, DeathCauseEntity>(
      DeathCause,
      DeathCauseEntity,
      this._supabase.from(supabaseConfig.tables.deathCauses),
    );
    this.diseases = new SupabaseGenericRepository<Disease, DiseaseEntity>(
      Disease,
      DiseaseEntity,
      this._supabase.from(supabaseConfig.tables.diseases),
    );
  }
}
