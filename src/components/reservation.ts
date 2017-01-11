
export class reservation {
  protected id: string;
  protected targetId: string;
  protected _target: RoomObject | undefined = undefined;
  protected creepId: string;
  protected _creep: Creep | undefined = undefined;
  protected _resourceType: string;
  protected _amount: number;
  protected _createdAt: number;
  protected _active: boolean = false;

  public static getById(id: string): reservation {
    let r = Memory.myObjects.reservations[id];
    return new reservation(r.id, r.targetId, r.creepId, r.resourceType, r.amount, r.createdAt, r.active);
  }

  public static build(): reservation {

  }

  public constructor(id: string, targetId: string, creepId: string, resourceType: string,
                     amount: number, createdAt: number, active: boolean) {
    this.id = id;
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
}
