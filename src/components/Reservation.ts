
import {generateId} from "./support/idGenerator";
import {Subtask} from "./Subtask";

export class Reservation {
  protected _id: string;
  protected _target: Structure | undefined = undefined;
  protected _creep: Creep | undefined = undefined;

  public static getById(id: string): Reservation {
    if(!Game.local.reservations[id]) {
      let r = Memory.reservations[id];
      Game.local.reservations[id] = new Reservation(id, r.targetId, r.creepId, r.resourceType, r.amount, r.createdAt, r.active);
    }
    return <Reservation>Game.local.reservations[id];
  }

  public static getByTargetId(id: string): Reservation[] {
    let targetReservations: Reservation[] = new Array();

    return targetReservations;
  }

  public static getByTarget(target: Structure): Reservation[] {
    let id: string = target.id;
    let targetReservations: Reservation[] = new Array();

    return targetReservations;
  }

  public static getByCreep(creep: Creep): Reservation[] {
    let id: string = creep.id;
    let creepReservations: Reservation[] = new Array();

    return creepReservations;
  }

  public static getByCreepId(id: string): Reservation[] {
    let creepReservations: Reservation[] = new Array();

    return creepReservations;
  }

  public static build(target: Structure, creep: Creep, resourceType: string, amount: number): Reservation {
    let id = generateId();
    let createdAt = Game.time;
    let active = false;

    let newReservation = new Reservation(id, target.id, creep.id, resourceType, amount, createdAt, active);
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
  get createdAt(): number {
    return Memory.reservations[this.id].createdAt;
  }
  set createdAt(newTime: number) {
    Memory.reservations[this.id].createdAt = newTime;
  }
  get creepId(): string {
    Memory.reservations[this.id].creepId;
  }
  set creepId(newId: string) {
    Memory.reservations[this.id].creepId = newId;
  }
  get targetId(): string {
    return Memory.reservations[this.id].targetId;
  }
  set targetId(newTarget: string) {
    Memory.reservations[this.id].targetId = newTarget;
  }
  get active(): boolean {
    return Memory.reservations[this.id].active;
  }
  set active(newState: boolean) {
    Memory.reservations[this.id].active = newState;
  }
  get resourceType(): string {
    return Memory.reservations[this.id].resourceType;
  }
  set resourceType(newType: string) {
    Memory.reservations[this.id].resourceType = newType;
  }
  get amount(): number {
    return Memory.reservations[this.id].amount;
  }
  set amount(newAmount: number) {
    Memory.reservations[this.id].amount = newAmount;
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
