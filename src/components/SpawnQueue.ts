import {SpawnRequest} from "./SpawnRequest";
import {generateId} from "./support/idGenerator";
/**
 * Created by neona on 1/22/2017.
 */


export class SpawnQueue {
  protected _id: string;
  protected _sortedRequests: SpawnRequest[] | undefined;

  public static build(): SpawnQueue {
    let id: string = generateId();
    let newSpawnQueue: SpawnQueue = new SpawnQueue(id);
    Memory.spawnQueues[id] = <SpawnQueueMemory>{};
    newSpawnQueue.changed = true;
    newSpawnQueue.requestIds = new Array();

    return newSpawnQueue;
  }

  public static getById(id: string): SpawnQueue {
    if(!Game.local.spawnQueues[id]) {
      Game.local.spawnQueues[id] = new SpawnQueue(id);
    }
    return <SpawnQueue>Game.local.spawnQueues[id];
  }

  constructor(id: string) {
    this._id = id;
  }

  public get requests(): SpawnRequest[] {
    if(!this._sortedRequests || this.changed) {
      this._sortedRequests = _.sortBy(this._requests, ["priority", "createdAt"]);
      this.changed = false;
    }
    return this._sortedRequests;
    //redo
  }
  public get _requests(): SpawnRequest[] {
    let requests: SpawnRequest[] = new Array();
    //implement on the fly conversion of ids to objects

    return requests;
  }
  public get id() {
    return this._id;
  }
  public get changed(): boolean {
    return Memory.spawnQueues[this.id].changed;
  }
  public set changed(newChanged: boolean) {
    Memory.spawnQueues[this.id].changed = newChanged;
  }
  public get requestIds(): string[] {
    return Memory.spawnQueues[this.id].requestIds;
  }
  public set requestIds(newIds: string[]) {
    Memory.spawnQueues[this.id].requestIds = newIds;
  }

  public push(spawnRequest: SpawnRequest) {
    this._requests.concat(spawnRequest);
    this.changed = true;
  }
  public pop(): SpawnRequest {
    let popRequest: SpawnRequest = this.requests[0];
    this._requests = this.requests;
    this._requests.splice(0, 1);
    return popRequest;
  }
  public deleteMemory() {
    delete Memory.spawnQueues[this._id];
  }
}

export interface SpawnQueueMemory {
  id: string;
  changed: boolean;
  requestIds: string[];
}
