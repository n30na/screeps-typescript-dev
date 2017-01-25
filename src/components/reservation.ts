
import {generateId} from "./support/idGenerator";
import {stripComments} from "tslint/lib/utils";
export class reservation {
  protected _id: string;
  protected targetId: string;
  protected _target: RoomObject | undefined = undefined;
  protected creepId: string;
  protected _creep: Creep | undefined = undefined;
  protected _resourceType: string;
  protected _amount: number;
  protected _createdAt: number;
  protected _active: boolean = false;

  public static getById(id: string): reservation {
    if(!Game.local.reservations[id]) {
      let r = Memory.reservations[id];
      Game.local.reservations[id] = new reservation(id, r.targetId, r.creepId, r.resourceType, r.amount, r.createdAt, r.active);
    }
    return <reservation>Game.local.reservations[id];
  }

  public static build(target: RoomObject, creep: Creep, resourceType: string, amount: number): reservation {
    let id = generateId();
    let createdAt = Game.time;
    let active = false;

    let newReservation = new reservation(id, target.id, creep.id, resourceType, amount, createdAt, active);
    newReservation.writeMemory();
    return newReservation;
  }

  public constructor(id: string, targetId: string, creepId: string, resourceType: string,
                     amount: number, createdAt: number, active: boolean) {
    this._id = id;
    this.targetId = targetId;
    this.creepId = creepId;
    this._resourceType = resourceType;
    this._amount = amount;
    this._createdAt = createdAt;
    this._active = active;
  }

  get createdAt(): number {
    return this._createdAt;
  }
  get age(): number {
    return Game.time - this._createdAt;
  }
  get active(): boolean {
    return this._active;
  }
  get id(): string {
    return this._id;
  }

  public activate(): number {
    let result = 0;
    if (!this._active) {

      this._active = true;
      result = 1;
    }

    return result;
  }

  public deactivate(): number {
    let result = 0;
    if (this._active) {

      this._active = true;
      result = 1;
    }
    return result;
  }

  public writeMemory() {
    let reservationMemory: ReservationMemory = <ReservationMemory>{};

    reservationMemory.creepId = this.creepId;
    reservationMemory.targetId = this.targetId;
    reservationMemory.id = this.id;
    reservationMemory.resourceType = this._resourceType;
    reservationMemory.amount = this._amount;
    reservationMemory.createdAt = this.createdAt;
    reservationMemory.active = this.active;

    Memory.reservations[this.id] = reservationMemory;
  }

  public deleteMemory() {
    delete Memory.reservations[this.id];
  }
}

export interface ReservationMemory {
  id: string;
  creepId: string;
  targetId: string;
  resourceType: string;
  amount: number;
  createdAt: number;
  active: boolean;
}
