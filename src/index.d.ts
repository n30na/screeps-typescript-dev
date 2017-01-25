import {reservation} from "./components/reservation";
import {task} from "./components/task";
import {subtask} from "./components/subtask";

interface Memory {
  uuid: number;
  log: any;
  creeps: hashTable<Creep>;
  flags: hashTable<Flag>
  spawns: hashTable<StructureSpawn>
  tasks: hashTable<task>;
  subtasks: hashTable<subtask>;
  reservations: hashTable<reservation>;
}

declare function require(path: string): any;

interface Global {
  log: any;
}

declare var global: Global;
