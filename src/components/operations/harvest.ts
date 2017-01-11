import {operation} from "../operation";

export class harvest extends operation {
  public static name: string = "harvest";

  public static run(creep: Creep, params: any): number {
    let result = 0;
    let source = Game.getObjectById(params.targetId);

    if (!source) {
      return 0;
    }

    if (creep.harvest(source) === 0) {
      result = 1;
    }

    return result;
  }
}
