interface Memory {
  uuid: number;
  log: any;
  creeps: hashTable<any> //hashTable<Creep>;
  flags: hashTable<any>; //hashTable<Flag>
  spawns: hashTable<any>; //hashTable<StructureSpawn>
  tasks: hashTable<any>; //hashTable<TaskMemory>;
  subtasks: hashTable<any>; //hashTable<SubtaskMemory>;
  reservations: hashTable<any>; //hashTable<ReservationMemory>;
  spawnRequests: hashTable<any>;
  spawnQueues: hashTable<any>;
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
  subtasks: hashTable<Subtask>;//hashTable<Subtask>;
  tasks: hashTable<Task>;//hashTable<Task>;
  reservations: hashTable<Reservation>;//hashTable<Reservation>;
  spawnRequests: hashTable<SpawnRequest;
  spawnQueues: hashTable<SpawnQueue>;
  spawnRoomIds: string[];
}

interface Subtask {}
interface Task {}
interface Reservation {}
interface SpawnRequest{}
interface SpawnQueue {}

interface Creep {
  acted: boolean;
  reservations(): Reservation[]; //Reservation[];
  _reservations: Reservation[]; //Reservation[];
  reservationsChanged: boolean;
  capacityAvailable(): number;
  _capacityAvailable: number;
  currentTask(): Task; //Task
  _currentTask: Task;  //Task
}

interface Structure {
  reservations(): Reservation[]; //Reservation[];
  _reservations: Reservation[]; //Reservation[];
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

interface Room {
  creeps(): Creep[];
  assignedCreeps(): Creep[];
}
