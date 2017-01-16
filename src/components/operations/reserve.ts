import {operation} from "../operation";

export class reserve extends operation {
  public static name: string = "reserve";

  public run(creep: Creep, params: any): number {
    let result = 0;
    let target = <StructureController> Game.getObjectById(params.targetId);

    if(!target) {
      return 0;
    }
    if(creep.reserveController(target) == OK) {
      result = 1;
    }

    return result;
  }
}
