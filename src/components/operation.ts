export class operation {
  protected _name: string;
  protected runFunction: Function;

  public constructor(name: string, run: Function) {
    this._name = name;
    this.runFunction = run; // (creep: Creep, params: any): number
  }

  run() :number {
    return this.runFunction();
  }

  get name() {
    return this._name;
  }

  //public run(creep: Creep, params: any): number;
}
