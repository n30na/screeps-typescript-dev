import { operation } from "../components/operation"

export class subtask {
  protected id: string;
  protected operationName: string;
  protected creepId: string;
  protected _creep: any = undefined;
  protected params: Object;

  constructor() {
    //this.id = Newid;
  }

  static getById(id: string) {
    let result = new subtask();

    return result;
  }

  get operation(): operation {
    return null;
  }

  get creep(): Creep {
    if(this._creep === undefined) {
      this._creep = Game.getObjectById(this.creepId);
    }
    return this._creep;
  }

  run(): number {
    return this.operation.run(this.creep, this.params);
  }
}
