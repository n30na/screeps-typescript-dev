import {Reservation} from "../Reservation";
/**
 * Created by neona on 1/25/2017.
 */

Structure.prototype.reservations = function (): Reservation[] {
  let stuructureReservations: Reservation[] =  new Array();

  return stuructureReservations;
}
Structure.prototype.resourceAvailable = function (resourceType: string): number {
  let strucutreResourceAvailable: number = 0;

  return strucutreResourceAvailable;
}
Structure.prototype.capacityRemaining = function (): number {
  let structureCapacityRemaining: number = 0;

  return structureCapacityRemaining;
}

export class StructureMemory {
  updated: boolean;
  resourceEnergyAvailable: number;
  capacityAvailable: number;
}
