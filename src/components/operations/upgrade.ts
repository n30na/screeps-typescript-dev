import {operation} from "../operation";

let run: Function = (creep: Creep, params: any) => {
  let result = 0;
  let target = <StructureController> Game.getObjectById(params.targetId);

  if(!target) {
    return 0;
  }
  if(creep.upgradeController(target) == OK) {
    result = 1;
  }

  return result;
}

export const upgrade = new operation("upgrade", run);

// export class upgrade extends operation {
//   public static name: string = "upgrade";
//
//   public run(creep: Creep, params: any): number {
//     let result = 0;
//     let target = <StructureController> Game.getObjectById(params.targetId);
//
//     if(!target) {
//       return 0;
//     }
//     if(creep.upgradeController(target) == OK) {
//       result = 1;
//     }
//
//     return result;
//   }
// }
