export class Operation {
  protected _name: string;
  protected runFunction: Function;

  public constructor(name: string, run: Function) {
    this._name = name;
    this.runFunction = run; // (creep: Creep, params: any): number
  }

  run(creep: Creep, params: Object) :number {
    return this.runFunction(creep, params);
  }

  get name() {
    return this._name;
  }

  //public run(creep: Creep, params: any): number;
}
