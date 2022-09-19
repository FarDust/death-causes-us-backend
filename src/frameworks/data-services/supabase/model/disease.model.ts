import { Expose } from "class-transformer";

export class Disease {
  @Expose()
  id: string;

  @Expose()
  name: string;
}