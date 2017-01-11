import {operation} from "../operation";

export class harvest extends operation {
  public static name: string = "withdraw";

  public static run(creep: Creep, params: any): number {
    let result = 0;
    let target = Game.getObjectById(params.targetId);
    let resource = params.resource;
    let amount = params.amount;

    if (!target) {
      return 0;
    }
    if ()

    return result;
  }
}
