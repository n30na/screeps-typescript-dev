import {reservation} from "../reservation";
/**
 * Created by neona on 1/25/2017.
 */

Structure.prototype.reservations = function (): reservation[] {

}
Structure.prototype.resourceAvailable = function (resourceType: string): number {

}
Structure.prototype.capacityRemaining = function (): number {

}

export class StructureMemory {
  updated: boolean;
  resourceEnergyAvailable: number;
  capacityAvailable: number;
}
