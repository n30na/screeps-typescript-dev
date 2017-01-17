import { operation } from "../components/operation"

export class subtask {
  protected id: string;
  protected operationName: string;
  protected taskOperation: operation;
  protected creepId: string;
  protected _creep: any = undefined;
  protected params: Object;

  constructor(id: string, operationName: string, taskOperation, creepId: string, params: Object) {
    this.id = id;
    this.operationName = operationName;
    this.taskOperation = taskOperation;
    this.creepId = creepId;
    this.params = params;
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
