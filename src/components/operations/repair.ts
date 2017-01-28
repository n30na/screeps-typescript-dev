import {Operation} from "../Operation";

let run: Function = (creep: Creep, params: any) => {
  let result = 0;
  let target = <Structure> Game.getObjectById(params.targetId);

  if(!target || target.hits === target.hitsMax) {
    return 0;
  }
  if(creep.repair(target) == OK) {
    result = 1;
  }

  return result;
}

export const repair = new Operation("repair", run);

// export class repair extends operation {
//   public static name: string = "repair";
//
//   public  run(creep: Creep, params: any): number {
//     let result = 0;
//     let target = <Structure> Game.getObjectById(params.targetId);
//
//     if(!target || target.hits === target.hitsMax) {
//       return 0;
//     }
//     if(creep.repair(target) == OK) {
//       result = 1;
//     }
//
//     return result;
//   }
// }
