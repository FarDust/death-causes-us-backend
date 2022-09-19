export abstract class IGenericRepository<T> {
  abstract getAll(item?: Partial<T>, filter?: keyof T): Promise<T[]>;

  abstract get(id: string): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T): Promise<T>;
}