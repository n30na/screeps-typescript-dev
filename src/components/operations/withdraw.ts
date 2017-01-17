import {operation} from "../operation";

let run: Function = (creep: Creep, params: any) => {
  let result = 0;
  let target = <Structure> Game.getObjectById(params.targetId);
  let resource = params.resource;
  let amount = params.amount;

  if (!target || _.sum(creep.carry) == creep.carryCapacity) {
    return 0;
  }
  if (creep.withdraw(target, resource, amount) == OK) {
    result = 1;
  }

  return result;
}

export const withdraw = new operation("withdraw", run);

// export class withdraw extends operation {
//   public static name: string = "withdraw";
//
//   public run(creep: Creep, params: any): number {
//     let result = 0;
//     let target = <Structure> Game.getObjectById(params.targetId);
//     let resource = params.resource;
//     let amount = params.amount;
//
//     if (!target || _.sum(creep.carry) == creep.carryCapacity) {
//       return 0;
//     }
//     if (creep.withdraw(target, resource, amount) == OK) {
//       result = 1;
//     }
//
//     return result;
//   }
// }
