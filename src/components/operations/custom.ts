import {operation} from "../operation";

export class custom extends operation {
  public static name: string = "custom";
  private runFunction: Function;

  public constructor(run :Function) {
    super();
    this.runFunction  = run;
}
  public run(creep: Creep, params: any) {
    return this.runFunction(creep, params);
  }

  // public static run(creep: Creep, params: any): number {
  //   let result = 0;
  //
  //
  //   return result;
  // }
}
