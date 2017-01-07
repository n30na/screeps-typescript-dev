import { log } from "../components/support/log";
import { subtask } from "../components/subtask";
import { reservation } from "../components/reservation";
import { generateId } from "../components/support/idGenerator";

export class task {
  protected id: string;
  protected creepId: string;
  protected _creep: Creep;
  protected subtaskIds: string[];
  protected _subtasks: subtask[] | undefined = undefined;
  protected _currentSubtask: subtask | undefined = undefined;
  protected currentSubtaskIndex: number;
  protected reservationIds: string[];
  protected _reservations: reservation[] | undefined = undefined;
  protected _completed: boolean = false;

  constructor(id: string, creepId: string, subtaskIds: string[], currentSubtaskIndex: number,
              reservationIds: string[], completed: boolean) {
    this.id = id;
    this.creepId = creepId;
    this.subtaskIds = subtaskIds;
    this.currentSubtaskIndex = currentSubtaskIndex;
    this.reservationIds = reservationIds;
    this._completed = completed;
  }

  static getById(id: string) {
    let result = new task();

    return result;
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

  run() {
    if(this.completed) return 0;

    let result = 0;
    if(result = this.currentSubtask.run() !== 0) {
      return result;
    } else if (this.currentSubtaskIndex === this.subtasks.length) {
      this._completed = true;
      return 0;
    } else {
      this.currentSubtaskIndex++;

    }
  }
}
