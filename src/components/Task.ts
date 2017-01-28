import { Subtask } from "./Subtask";
import { Reservation } from "./Reservation";
import { generateId } from "../components/support/idGenerator";

export class Task {
  protected id: string;
  protected creepId: string;
  protected _creep: any;
  protected subtaskIds: string[];
  protected _subtasks: Subtask[] | undefined = undefined;
  protected _currentSubtask: Subtask | undefined = undefined;
  protected currentSubtaskIndex: number;
  protected reservationIds: string[];
  protected _reservations: Reservation[] | undefined = undefined;
  protected _completed: boolean = false;

  public static getById(id: string): Task {
    if(!Game.local.tasks[id]) {
      let t = Memory.tasks[id];
      Game.local.tasks[id] = new Task(id, t.creepId, t.subtaskIds, t.currentSubtaskIndex, t.reservationIds, t.completed);
    }
    return <Task>Game.local.tasks[id];
  }

  public static getByCreep(creep: Creep): Task[] {
    let creepTasks: Task[] = new Array();

    return creepTasks;
  }

  public static build(creep: Creep, subtasks: Subtask[], reservations: Reservation[]): Task {
    let id: string = generateId();
    let creepId: string = creep.id;
    let subtaskIds: string[] = new Array();
    let reservationsIds: string[] = new Array;

    for(let iterator in subtasks) {
      subtaskIds[iterator] = subtasks[iterator].id;
    }
    for(let iterator in reservations) {
      reservationsIds[iterator] = reservations[iterator].id;
    }

    let newtask = new Task(id, creepId, subtaskIds, 0, reservationsIds, false);
    newtask.writeMemory();

    return newtask;
  }

  constructor(id: string, creepId: string, subtaskIds: string[], currentSubtaskIndex: number,
              reservationIds: string[], completed: boolean) {
    this.id = id;
    this.creepId = creepId;
    this.subtaskIds = subtaskIds;
    this.currentSubtaskIndex = currentSubtaskIndex;
    this.reservationIds = reservationIds;
    this._completed = completed;
  }

  get creep() {
    if(this._creep === undefined) {
      this._creep = Game.getObjectById(this.creepId);
    }
    return this._creep;
  }

  get subtasks(): Subtask[] {
    if(this._subtasks === undefined) {
      this._subtasks = new Array();
      for(let subtaskId in this.subtaskIds) {
        this._subtasks.concat(Subtask.getById(subtaskId)); // test
      }
    }
    return this._subtasks;
  }

  get currentSubtask(): Subtask {
    if(this._currentSubtask === undefined) {
      this._currentSubtask = this.subtasks[this.currentSubtaskIndex];
    }
    return this._currentSubtask;
  }

  get reservations() {
    if(this._reservations === undefined) {
      this._reservations = new Array();
      for(let reservationId in this.reservationIds) {
        this._reservations.concat(Reservation.getById(reservationId));
      }
    }
    return this._reservations;
  }

  get completed(): boolean {
    return this._completed;
  }

  run(): number {
    if (this.completed) {
      return 0;
    }

    let result = this.currentSubtask.run();
    if (result !== 0) {
      return result;
    } else if (this.currentSubtaskIndex === this.subtasks.length) {
      this._completed = true;
      return 0;
    } else {
      this.currentSubtaskIndex++;
      this._currentSubtask = undefined;
      return this.currentSubtask.run();
    }
  }

  writeMemory() {
    let taskMemory: TaskMemory = <TaskMemory>{};
    taskMemory.id = this.id;
    taskMemory.creepId = this.creepId;
    taskMemory.subtaskIds = this.subtaskIds;
    taskMemory.currentSubtaskIndex = this.currentSubtaskIndex;
    taskMemory.completed = this.completed;

    Memory.tasks[this.id] = taskMemory;
  }

  deleteMemory() {
    delete Memory.tasks[this.id];
  }
}

export interface TaskMemory {
  id: string;
  creepId: string;
  subtaskIds: string[];
  currentSubtaskIndex: number;
  completed: boolean;
}
