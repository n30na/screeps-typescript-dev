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
  subtasks: hashTable<subtask>;//hashTable<Subtask>;
  tasks: hashTable<task>;//hashTable<Task>;
  reservations: hashTable<reservation>;//hashTable<Reservation>;
}

interface subtask {}

interface task {}

interface reservation {}

interface Creep {
  acted: boolean;
  reservations(): reservation[]; //Reservation[];
  _reservations: reservation[]; //Reservation[];
  reservationsChanged: boolean;
  capacityAvailable(): number;
  _capacityAvailable: number;
  currentTask(): task; //Task
  _currentTask: task;  //Task
}

interface Structure {
  reservations(): reservation[]; //Reservation[];
  _reservations: reservation[]; //Reservation[];
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
