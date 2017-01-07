
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

  public constructor() {

  }

  public static getById(id: string): reservation {
    let result = new reservation();

    return result;
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
