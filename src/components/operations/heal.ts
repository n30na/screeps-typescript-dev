import {Operation} from "../Operation";

let run: Function = (creep: Creep, params: any) => {
  let result = 0;
  let target = <Creep> Game.getObjectById(params.targetId);

  if(!target) {
    return 0;
  }
  if(creep.heal(target) == OK || creep.rangedHeal(target) == OK) {
    result = 1;
  }

  return result;
}

export const heal = new Operation("heal", run);

// export class heal extends operation {
//   public static name: string = "heal";
//
//   public run(creep: Creep, params: any): number {
//     let result = 0;
//     let target = <Creep> Game.getObjectById(params.targetId);
//
//     if(!target) {
//       return 0;
//     }
//     if(creep.heal(target) == OK || creep.rangedHeal(target) == OK) {
//       result = 1;
//     }
//
//     return result;
//   }
// }
