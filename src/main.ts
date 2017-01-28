import * as CreepManager from "./components/creeps/creepManager";
import * as Config from "/config/config";
import * as Operations from "./components/operations/all"

import { log } from "./components/support/log";
import {Operation} from "./components/Operation";
import {Subtask} from "./components/Subtask";
import {Task} from "./components/Task";
import {Reservation} from "./components/Reservation";

// Any code written outside the `loop()` method is executed only when the
// Screeps system reloads your script.
// Use this bootstrap wisely. You can cache some of your stuff to save CPU.
// You should extend prototypes before the game loop executes here.

// This is an example for using a config variable from `config.ts`.
if (Config.USE_PATHFINDER) {
  PathFinder.use(true);
}

log.info("load");


/**
 * Screeps system expects this "loop" method in main.js to run the
 * application. If we have this line, we can be sure that the globals are
 * bootstrapped properly and the game loop is executed.
 * http://support.screeps.com/hc/en-us/articles/204825672-New-main-loop-architecture
 *
 * @export
 */

function prepEnvironment() {
  if (!Game.local) {
    Game.local = {subtasks: {}, tasks: {}, reservations: {}};
  }

  // if (!Game.local.subtasks) {
  //   Game.local.subtasks = new Array();
  // }
  // if (!Game.local.tasks) {
  //   Game.local.tasks = new Array();
  // }
  // if (!Game.local.reservations) {
  //   Game.local.reservations = new Array();
  // }
}

export function loop() {
  // Check memory for null or out of bounds custom objects
  if (!Memory.uuid || Memory.uuid > 100) {
    Memory.uuid = 0;
  }
  prepEnvironment();



  for (let i in Game.rooms) {
    let room: Room = Game.rooms[i];

    CreepManager.run(room);

    // Clears any non-existing creep memory.
    for (let name in Memory.creeps) {
      let creep: any = Memory.creeps[name];

      if (creep.room === room.name) {
        if (!Game.creeps[name]) {
          log.info("Clearing non-existing creep memory:", name);
          delete Memory.creeps[name];
        }
      }
    }
  }
}
