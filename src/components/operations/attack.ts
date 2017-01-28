import {Operation} from "../Operation";

let run: Function = (creep: Creep, params: any) => {
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

export const attack = new Operation("attack", run);

// export class attack extends operation {
//   public static name: string = "attack";
//
//   public run(creep: Creep, params: any): number {
//     let result = 0;
//     let target = <Creep | Spawn | Structure> Game.getObjectById(params.targetId);
//
//     if(!target) {
//       return 0;
//     }
//     if(creep.attack(target) == OK) {
//       result = 1;
//     }
//
//     return result;
//   }
// }
