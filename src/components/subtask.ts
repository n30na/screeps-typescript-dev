import { operation } from "../components/operation"
import {generateId} from "./support/idGenerator";
import * as Operations from "./operations/all"

export class subtask {
  protected _id: string;
  protected operationName: string;
  protected _taskOperation: operation;
  protected creepId: string;
  protected _creep: any = undefined;
  protected params: Object;

  public constructor(id: string, operationName: string, creepId: string, params: Object) {
    this._id = id;
    this.operationName = operationName;
    this.taskOperation = taskOperation;
    this.creepId = creepId;
    this.params = params;
  }

  public static getById(id: string) {
    let result = new subtask();

    return result;
  }

  public static build(taskOperation: operation, creep: Creep, params: Object): subtask {
    let id: string = generateId();
    let operationName: string = taskOperation.name;
    let creepId: string = creep.id;

    let newSubtask: subtask = new subtask(id, operationName, creepId, params);
    newSubtask.writeMemory();
    return newSubtask;
  }

  get operation(): operation {
    if(!this._taskOperation) {
      //this._taskOperation = Operations[this.operationName];
    }
    return this._taskOperation;
  }

  get creep(): Creep {
    if(this._creep === undefined) {
      this._creep = Game.getObjectById(this.creepId);
    }
    return this._creep;
  }

  get id(): string {
    return this._id;
  }

  run(): number {
    return this.operation.run(this.creep, this.params);
  }

  public writeMemory() {

  }

  public deleteMemory() {

  }
}
