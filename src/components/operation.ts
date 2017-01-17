export class operation {
  protected name: string;
  protected runFunction: Function;

  public constructor(name: string, run: Function) {
    this.name = name;
    this.runFunction = run; // (creep: Creep, params: any): number
  }

  run() :number {
    return this.runFunction();
  }

  //public run(creep: Creep, params: any): number;
}
