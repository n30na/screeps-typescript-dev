import {operation} from "../operation";

export class harvest extends operation {
  public static name: string = "harvest";

  public run(creep: Creep, params: any): number {
    let result = 0;
    let source = <Source | Mineral> Game.getObjectById(params.targetId);

    if (!source || _.sum(creep.carry) === creep.carryCapacity) {
      return 0;
    }

    if (creep.harvest(source) == OK) {
      result = 1;
    }

    return result;
  }
}
