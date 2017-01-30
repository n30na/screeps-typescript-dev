/**
 * Created by neona on 1/22/2017.
 */


export class SpawnRequest {
  protected _id: string;
  protected _body: string[];
  protected _priority: number;
  protected _createdAt: number;

  constructor(id: string, body: string[], priority: number, createdAt: number) {
    this._id = id;
    this._body = body;
    this._priority = priority;
    this._createdAt = createdAt;
  }

  public get id(): string {
    return this._id;
  }
  public get body(): string[] {
    return this._body;
  }
  public get priority(): number {
    return this._priority;
  }
  public get createdAt() {
    return this._createdAt;
  }
  public writeMemory() {

  }
  public deleteMemory() {
    delete Memory.spawnRequests[this._id];
  }
}
