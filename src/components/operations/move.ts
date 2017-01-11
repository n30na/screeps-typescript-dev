import {operation} from "../operation";

export class move extends operation {
  public static name: string = "move";

  public run(creep: Creep, params: any): number {
    let result = 0;
    let destType: string = params.dest;

    if(destType === "RoomObject") {
      let destId: string = params.destId;
      let dest: any = Game.getObjectById(destId);

      if (!dest || creep.pos == dest.pos) {
        return 0;
      }
      creep.moveTo(dest);
      result = 1;

    } else {
      let destX: number = params.x;
      let destY: number = params.y;

      if(params.destRoom && creep.room.name !== params.destRoom) {
        // let destRoom: string = params.destRoom;
        // implement direct room movement
      } else {
        if(creep.pos.x === destX && creep.pos.y === destY) {
          return 0;
        } else {
          creep.moveTo(destX, destY);
          result = 1;
        }
      }

    }

    return result;
  }
}
