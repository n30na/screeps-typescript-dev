import {SpawnRequest} from "./SpawnRequest";
/**
 * Created by neona on 1/22/2017.
 */


export class SpawnQueue {
  protected _id: string;
  protected _requests: SpawnRequest[];
  protected _requestIds: string[];
  protected _sortedRequests: SpawnRequest[] | undefined;
  protected changed: boolean = false;

  public static build(): SpawnQueue {

  }

  public static getById(id: string): SpawnQueue {

  }

  constructor(id: string, requests: SpawnRequest[]) {
    this._id = id;
    this._requests = requests;
    this.changed = false;
    this._sortedRequests = undefined;
  }

  public get requests(): SpawnRequest[] {
    if(!this._sortedRequests || this.changed) {
      this._sortedRequests = _.sortBy(this._requests,
        ["priority", "createdAt"]);
      this.changed = false;
    }
    return this._sortedRequests;
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
  public writeMemory() {

  }
  public deleteMemory() {
    delete Memory.spawnQueues[this._id];
  }
}
