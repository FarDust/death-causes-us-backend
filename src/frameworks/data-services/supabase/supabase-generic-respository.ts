import { Logger } from "@nestjs/common";
import { PostgrestFilterBuilder, PostgrestResponse } from "@supabase/postgrest-js";
import { SupabaseQueryBuilder } from "@supabase/supabase-js/dist/module/lib/SupabaseQueryBuilder";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { IGenericRepository } from "src/core";

type IndexableById<T> = T & { id: string };

export class SupabaseGenericRepository<T extends Partial<E>, E> extends IGenericRepository<E> {

  private readonly logger = new Logger(SupabaseGenericRepository.name);

  private _repository: SupabaseQueryBuilder<IndexableById<T>>;
  private _model: ClassConstructor<T>;
  private _entity: ClassConstructor<E>;

  constructor(model: ClassConstructor<T>, entity: ClassConstructor<E>, repository: SupabaseQueryBuilder<IndexableById<T>>) {
    super();
    this._model = model;
    this._entity = entity;
    this._repository = repository
    this.logger.log(`Created ${this.constructor.name} for ${this._entity.name}`);
  }

  private _mapToEntity(item: IndexableById<T>): E {
    return plainToInstance<E, IndexableById<T>>(this._entity, item);
  }

  async getAll(item?: Partial<E>, filter?: keyof E): Promise<E[]> {
    let result: PostgrestResponse<IndexableById<T>>;
    this.logger.log(`Getting all ${this._entity.name} from ${this._model.name}`);
    if (item && filter) {
      result = await this._repository.select('*').eq(filter as any, item[filter] as any)
    } else {
      result = await this._repository.select('*')
    }
    this.logger.log(`Got ${result.data.length} ${this._entity.name} from ${this._model.name}`);
    return result.data.map(x => this._mapToEntity(x));
  }

  async get(id: string): Promise<E> {
    return this._mapToEntity(await this._repository.select('*').eq('id', id as any).then(x => x.data[0]));
  }


  create(item: E): Promise<E> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: E): Promise<E> {
    throw new Error("Method not implemented.");
  }

  
}