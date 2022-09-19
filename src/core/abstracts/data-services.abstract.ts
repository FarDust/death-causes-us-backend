import { DeathCause, Disease } from "../entities";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {

  abstract diseases: IGenericRepository<Disease>;

  abstract deathCauses: IGenericRepository<DeathCause>;
  
}