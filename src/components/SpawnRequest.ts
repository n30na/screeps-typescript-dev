/**
 * Created by neona on 1/22/2017.
 */


export class SpawnRequest {
  protected _body: string[];
  protected _priority: number;
  protected _createdAt: number;

  constructor(body: string[], priority: number, createdAt: number) {
    this._body = body;
    this._priority = priority;
    this._createdAt = createdAt;
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
}
