import {generateId} from "./support/idGenerator";

export class Reservation {
  protected _id: string;
  protected _target: Structure | undefined = undefined;
  protected _creep: Creep | undefined = undefined;

  public static getById(id: string): Reservation {
    if(!Game.local.reservations[id]) {
      Game.local.reservations[id] = new Reservation(id);
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
    Memory.reservations[id] = <ReservationMemory>{};

    let newReservation = new Reservation(id);
    newReservation.targetId = target.id;
    newReservation.creepId = creep.id;
    newReservation.resourceType = resourceType;
    newReservation.amount = amount;
    newReservation.createdAt = createdAt;
    newReservation.active = active;
    newReservation.writeMemory();
    return newReservation;
  }

  public constructor(id: string) {
    this._id = id;
  }

  get age(): number {
    return Game.time - this.createdAt;
  }
  get createdAt(): number {
    return Memory.reservations[this.id].createdAt;
  }
  set createdAt(newTime: number) {
    Memory.reservations[this.id].createdAt = newTime;
  }
  get creepId(): string {
    return Memory.reservations[this.id].creepId;
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
  get target(): Structure {
    if (!this._target) {
      this._target = <Structure>Game.getObjectById(this.targetId);
    }
    return this._target;
  }
  get creep(): Creep {
    if (!this._creep) {
      this._creep = <Creep>Game.getObjectById(this.targetId);
    }
    return this._creep;
  }

  public activate(): number {
    let result = 0;
    if (!this.active) {
      // code to commit reservation
      this.active = true;
      result = 1;
    }

    return result;
  }

  public deactivate(): number {
    let result = 0;
    if (this.active) {
      // code to remove reservation
      this.active = true;
      result = 1;
    }
    return result;
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
