import {SpawnRequest} from "./SpawnRequest";
/**
 * Created by neona on 1/22/2017.
 */


export class SpawnQueue {
  protected _id: string;
  protected _requests: SpawnRequest[];
  protected _sortedRequests: SpawnRequest[] | undefined;
  protected changed: boolean = false;

  constructor(id: string, requests: SpawnRequest[]) {
    this._id = id;
    this._requests = requests;
    this.changed = false;
    this._sortedRequests = undefined;
  }

  public requests() {
    if(!this._sortedRequests || this.changed) {
      this._sortedRequests = _.sortBy(this._requests, [ function(r: SpawnRequest) { return r.priority}, function(r: SpawnRequest) { return r.createdAt}]);
      this.changed = false;
    }
    return this._sortedRequests;
  }

  public push(spawnRequest: SpawnRequest) {
    this._requests.concat(spawnRequest);
    this.changed = true;
  }
  public pop(): SpawnRequest {

  }
  public writeMemory() {

  }
  public deleteMemory() {
    delete Memory.spawnQueues[this._id];
  }
}
