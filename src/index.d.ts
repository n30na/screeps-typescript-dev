// import {reservation, ReservationMemory} from "./components/reservation";
// import {task, TaskMemory} from "./components/task";
// import {subtask, SubtaskMemory} from "./components/subtask";
// import {StructureMemory} from "./components/nativeExtensions/Structure";

interface Memory {
  uuid: number;
  log: any;
  creeps: hashTable<any> //hashTable<Creep>;
  flags: hashTable<any>; //hashTable<Flag>
  spawns: hashTable<any>; //hashTable<StructureSpawn>
  tasks: hashTable<any>; //hashTable<TaskMemory>;
  subtasks: hashTable<any>; //hashTable<SubtaskMemory>;
  reservations: hashTable<any>; //hashTable<ReservationMemory>;
}

declare function require(path: string): any;

interface Global {
  log: any;
}

declare var global: Global;

interface hashTable<T> {
  [key: string]: T;
}

interface Game {
  local: Local;
}

interface Local {
  subtasks: hashTable<any>;//hashTable<subtask>;
  tasks: hashTable<any>;//hashTable<task>;
  reservations: hashTable<any>;//hashTable<reservation>;
}

interface Creep {
  acted: boolean;
  reservations(): any[]; //reservation[];
  _reservations: any[]; //reservation[];
  reservationsChanged: boolean;
}

interface Structure {
  reservations(): any[]; //reservation[];
  _reservations: any[]; //reservation[];
  reservationsChanged: boolean;
  resourceAvailable(resourceType: string): number;
  _resourceEnergyAvailable: number;
  capacityRemaining(): number;
  _capacityRemaining: number;
  resourcesChanged: boolean;
  Memory: StructureMemory;
}

interface StructureMemory {
  updated: boolean;
  resourceEnergyAvailable: number;
  capacityAvailable: number;
}
