import { log } from "../components/support/log";
import { subtask } from "../components/subtask";
import { reservation } from "../components/reservation";
import { generateId } from "../components/support/idGenerator";

export class task {
  protected id: string;
  protected creepId: string;
  protected _creep: any;
  protected subtaskIds: string[];
  protected _subtasks: subtask[] | undefined = undefined;
  protected _currentSubtask: subtask | undefined = undefined;
  protected currentSubtaskIndex: number;
  protected reservationIds: string[];
  protected _reservations: reservation[] | undefined = undefined;
  protected _completed: boolean = false;

  public static getById(id: string): task {
    let t = Memory.myObjects.tasks[id];
    return new task(t.id, t.creepId, t.subtaskIds, t.currentSubtaskIndex, t.reservationIds, t.completed);
  }

  public static buildNew(): task {

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

  get subtasks(): subtask[] {
    if(this._subtasks === undefined) {
      this._subtasks = new Array();
      for(let subtaskId in this.subtaskIds) {
        this._subtasks.concat(subtask.getById(subtaskId)); // test
      }
    }
    return this._subtasks;
  }

  get currentSubtask(): subtask {
    if(this._currentSubtask === undefined) {
      this._currentSubtask = this.subtasks[this.currentSubtaskIndex];
    }
    return this._currentSubtask;
  }

  get reservations() {
    if(this._reservations === undefined) {
      this._reservations = new Array();
      for(let reservationId in this.reservationIds) {
        this._reservations.concat(reservation.getById(reservationId));
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
}
