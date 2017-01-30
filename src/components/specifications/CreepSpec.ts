/**
 * Created by neona on 1/29/2017.
 */
export class CreepSpec {
  public type: string;
  public energy: number;
  public body: string[];

  constructor(type: string, energy: number, body: string[]) {
    this.type = type;
    this.energy = energy;
    this.body = body;
  }
}
