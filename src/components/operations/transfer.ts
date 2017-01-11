import {operation} from "../operation";

export class harvest extends operation {
  public static name: string = "transfer";

  public static run(creep: Creep, params: any): number {
    let result = 0;
    let target = Game.getObjectById(params.targetId);
    let resource = params.resource;

    if(!target || Creep.carry[resource] === 0) {
      return 0;
    }
    if(creep.transfer(target, resource) === 0) {
      result = 1;
    }

    return result;
  }
}
