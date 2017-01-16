import {operation} from "../operation";

export class dismantle extends operation {
  public static name: string = "dismantle";

  public  run(creep: Creep, params: any): number {
    let result = 0;
    let target = <Structure | Spawn> Game.getObjectById(params.targetId);

    if(!target) {
      return 0;
    }
    if(creep.dismantle(target) == OK) {
      result = 1;
    }

    return result;
  }
}
