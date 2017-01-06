import { log } from "../components/support/log";
import { subtask } from "../components/subtask";
import { reservation } from "../components/reservation";
import { generateId } from "../components/support/idGenerator";

export class task {
  protected id: string;
  protected creepId: string;
  protected creep: any;
  protected subtaskIds: string[];
  protected subtasks: subtask[];
  protected currentSubtask: subtask;
  protected currentSubtaskIndex: number;
  protected reservationIds: string[];
  protected reservations: reservation[];

  constructor() {
    this.id = generateId();
  }

  get creep() {
    if(this.creep === undefined) {
      this.creep = Game.getObjectById(this.creepId);
    }
    return this.creep;
  }

  get subtasks() {
    if(this.subtasks === undefined) {
      this.subtasks = new Array();
      for(let subtaskId in this.subtaskIds) {
        this.subtasks.concat(new subtask(subtaskId)); // test
      }
    }
    return this.subtasks;
  }

  get reservations() {

  }

  run() {

  }
}
