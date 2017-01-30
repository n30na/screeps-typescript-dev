import {generateId} from "./support/idGenerator";
/**
 * Created by neona on 1/22/2017.
 */


export class SpawnRequest {
  protected _id: string;

  public static build(body: string[], priority: number): SpawnRequest {
    let id: string = generateId();
    let createdAt: number = Game.time;
    let newRequest: SpawnRequest = new SpawnRequest(id);
    newRequest.createdAt = createdAt
    newRequest.body = body;
    newRequest.priority = priority;
    return newRequest;
  }

  public static getById(id: string): SpawnRequest {
    return new SpawnRequest(id);
  }

  constructor(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }
  public get body(): string[] {
    return Memory.spawnRequests[this.id].body;
  }
  public set body(newBody: string[]) {
    Memory.spawnRequests[this.id].body = newBody;
  }
  public get priority(): number {
    return Memory.spawnRequests[this.id].priority;
  }
  public set priority(newPriority: number) {
    Memory.spawnRequests[this.id].priority = newPriority;
  }
  public get createdAt() {
    return Memory.spawnRequests[this.id].createdAt;
  }
  public set createdAt(newCreatedTime: number) {
    Memory.spawnRequests[this.id].createdAt = newCreatedTime;
  }
  public deleteMemory() {
    delete Memory.spawnRequests[this.id];
  }
}

export interface SpawnRequestMemory {
  id: string;
  body: string[];
  priority: number;
  createdAt: number;
}
