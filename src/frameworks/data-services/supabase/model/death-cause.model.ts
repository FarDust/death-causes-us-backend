import { Expose } from "class-transformer";
import { DeathCause as DeathCauseEntity } from "src/core";

type DeathCauseMap = Omit<DeathCauseEntity, 'cause'> & { causeId: string };

export class DeathCause implements DeathCauseMap {
  @Expose()
  id: string;

  @Expose()
  year: number;

  @Expose()
  month: number;

  @Expose(
    { name: 'causeId' }
  )
  causeId: string;

  @Expose()
  deaths: number;
}