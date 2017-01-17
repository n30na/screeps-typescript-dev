import {operation} from "../operation";

let run: Function = (creep: Creep, params: any) => {
  let result = 0;
  let target = <ConstructionSite> Game.getObjectById(params.targetId);

  if(!target) {
    return 0;
  }
  if(creep.build(target) == OK) {
    result = 1;
  }

  return result;
}

export const build = new operation("build", run);

// export class build extends operation {
//   public static name: string = "build";
//
//   public run(creep: Creep, params: any): number {
//     let result = 0;
//     let target = <ConstructionSite> Game.getObjectById(params.targetId);
//
//     if(!target) {
//       return 0;
//     }
//     if(creep.build(target) == OK) {
//       result = 1;
//     }
//
//     return result;
//   }
// }
