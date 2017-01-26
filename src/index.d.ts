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
  subtasks: hashTable<subtask>;//hashTable<subtask>;
  tasks: hashTable<task>;//hashTable<task>;
  reservations: hashTable<reservation>;//hashTable<reservation>;
}

interface subtask {}

interface task {}

interface reservation {}

interface Creep {
  acted: boolean;
  reservations(): reservation[]; //reservation[];
  _reservations: reservation[]; //reservation[];
  reservationsChanged: boolean;
  capacityAvailable(): number;
  _capacityAvailable: number;
  currentTask(): task; //task
  _currentTask: task;  //task
}

interface Structure {
  reservations(): reservation[]; //reservation[];
  _reservations: reservation[]; //reservation[];
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
