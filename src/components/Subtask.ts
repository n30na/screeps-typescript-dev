import { Operation } from "./Operation"
import {generateId} from "./support/idGenerator";
import {all as Operations} from "./operations/all"

export class Subtask {
  protected _id: string;
  protected _taskOperation: Operation;
  protected _creep: any = undefined;

  public constructor(id: string) {
    this._id = id;
  }

  public static getById(id: string): Subtask {
    if(!Game.local.subtasks[id]) {
      Game.local.subtasks[id] = new Subtask(id);
    }
    return <Subtask>Game.local.subtasks[id];
  }

  public static build(taskOperation: Operation, creep: Creep, params: Object): Subtask {
    let id: string = generateId();
    let operationName: string = taskOperation.name;
    let creepId: string = creep.id;

    let newSubtask: Subtask = new Subtask(id);
    Memory.subtasks[id] = <SubtaskMemory>{};

    newSubtask.operationName = operationName;
    newSubtask.creepId = creepId;
    newSubtask.params = params;

    Memory.subtasks[id] = newSubtask;
    return newSubtask;
  }

  get operation(): Operation {
    if(!this._taskOperation) {
      this._taskOperation = Operations[this.operationName];
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

  get creepId(): string {
    return Memory.subtasks[this.id].creepId;
  }
  set creepId(newId: string) {
    Memory.subtasks[this.id].creepId = newId;
  }
  get operationName(): string {
    return Memory.subtasks[this.id].operationName;
  }
  set operationName(newOperation) {
    Memory.subtasks[this.id].operationName = newOperation;
  }
  get params(): Object {
    return Memory.subtasks[this.id].params;
  }
  set params(newParams: Object) {
    Memory.subtasks[this.id].params = newParams;
  }

  run(): number {
    return this.operation.run(this.creep, this.params);
  }

  public deleteMemory() {
    delete Memory.subtasks[this.id];
  }
}

export interface SubtaskMemory {
  creepId: string;
  operationName: string;
  id: string;
  params: Object;
}
