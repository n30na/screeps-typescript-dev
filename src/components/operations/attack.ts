import {operation} from "../operation";

export class attack extends operation {
  public static name: string = "attack";

  public run(creep: Creep, params: any): number {
    let result = 0;
    let target = <Creep | Spawn | Structure> Game.getObjectById(params.targetId);

    if(!target) {
      return 0;
    }
    if(creep.attack(target) == OK) {
      result = 1;
    }

    return result;
  }
}
