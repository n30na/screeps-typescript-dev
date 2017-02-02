import { Subtask } from "./Subtask";
import { Reservation } from "./Reservation";
import { generateId } from "../components/support/idGenerator";

export class Task {
  protected _id: string;
  protected _creep: any;
  protected _subtasks: Subtask[] | undefined = undefined;
  protected _currentSubtask: Subtask | undefined = undefined;
  protected _reservations: Reservation[] | undefined = undefined;

  public static getById(id: string): Task {
    if(!Game.local.tasks[id]) {
      Game.local.tasks[id] = new Task(id);
    }
    return <Task>Game.local.tasks[id];
  }

  public static getByCreep(creep: Creep): Task[] {
    let creepTasks: Task[] = new Array();

    return creepTasks;
  }

  public static build(creep: Creep, subtasks: Subtask[]): Task {
    let id: string = generateId();
    let creepId: string = creep.id;
    let subtaskIds: string[] = new Array();

    for(let iterator in subtasks) {
      subtaskIds[iterator] = subtasks[iterator].id;
    }

    let newTask = new Task(id);
    Memory.tasks[id] = <TaskMemory>{};

    newTask.creepId = creepId;
    newTask.subtaskIds = subtaskIds;
    newTask.currentSubtaskIndex = 0;
    newTask.completed = false;

    Game.local.tasks[id] = newTask;
    return newTask;
  }

  constructor(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }
  get creep(): Creep {
    if(this._creep === undefined) {
      this._creep = Game.getObjectById(this.creepId);
    }
    return this._creep;
  }
  get creepId(): string {
    return Memory.tasks[this.id].creepId;
  }
  set creepId(newId: string) {
    Memory.tasks[this.id].creepId = newId;
  }
  get subtaskIds(): string[] {
    return Memory.tasks[this.id].subtaskIds;
  }
  set subtaskIds(newIds: string[]) {
    Memory.tasks[this.id].subtaskIds = newIds;
  }
  get currentSubtaskIndex(): number {
    return Memory.tasks[this.id].currentSubtaskIndex;
  }
  set currentSubtaskIndex(newSubtaskIndex: number) {
    Memory.tasks[this.id] = newSubtaskIndex;
  }
  get completed(): boolean {
    return Memory.tasks[this.id].completed;
  }
  set completed(newCompleted: boolean) {
    Memory.tasks[this.id].completed = newCompleted;
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

  run(): number {
    if (this.completed) {
      return 0;
    }

    let result = this.currentSubtask.run();
    if (result !== 0) {
      return result;
    } else if (this.currentSubtaskIndex === this.subtasks.length) {
      this.completed = true;
      return 0;
    } else {
      this.currentSubtaskIndex++;
      this._currentSubtask = undefined;
      return this.currentSubtask.run();
    }
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
