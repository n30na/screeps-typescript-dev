import { Operation } from "./Operation"
import {generateId} from "./support/idGenerator";
import {all as Operations} from "./operations/all"

export class Subtask {
  protected _id: string;
  protected _taskOperation: Operation;
  protected _creep: any = undefined;

  public constructor(id: string, operationName: string, creepId: string, params: Object) {
    this._id = id;
    this.operationName = operationName;
    this.creepId = creepId;
    this.params = params;
  }

  public static getById(id: string): Subtask {
    if(!Game.local.subtasks[id]) {
      let s = Memory.subtasks[id];
      Game.local.subtasks[id] = new Subtask(id, s.operationName, s.creepId, s.params);
    }
    return <Subtask>Game.local.subtasks[id];
  }

  public static build(taskOperation: Operation, creep: Creep, params: Object): Subtask {
    let id: string = generateId();
    let operationName: string = taskOperation.name;
    let creepId: string = creep.id;

    let newSubtask: Subtask = new Subtask(id, operationName, creepId, params);
    newSubtask.writeMemory();
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

  public writeMemory() {
    let subtaskMemory: SubtaskMemory = <SubtaskMemory>{};
    subtaskMemory.creepId = this.creepId;
    subtaskMemory.operationName = this.operationName;
    subtaskMemory.id = this.id;
    subtaskMemory.params = this.params;

    Memory.subtasks[this.id] = subtaskMemory;
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
