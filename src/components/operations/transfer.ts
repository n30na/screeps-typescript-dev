import {Operation} from "../Operation";

let run: Function = (creep: Creep, params: any) => {
  let result = 0;
  let target = <Structure> Game.getObjectById(params.targetId);
  let resource = params.resource;

  if(!target) {
    return 0;
  }
  if(creep.transfer(target, resource) == OK) {
    result = 1;
  }

  return result;
}

export const transfer = new Operation("transfer", run);

// export class transfer extends operation {
//   public static name: string = "transfer";
//
//   public run(creep: Creep, params: any): number {
//     let result = 0;
//     let target = <Structure> Game.getObjectById(params.targetId);
//     let resource = params.resource;
//
//     if(!target) {
//       return 0;
//     }
//     if(creep.transfer(target, resource) == OK) {
//       result = 1;
//     }
//
//     return result;
//   }
// }
