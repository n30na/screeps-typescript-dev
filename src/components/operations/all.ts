// import {operation} from "../operation";
// import {attack} from "./attack";
// import {build} from "./build";
// import {dismantle} from "./dismantle";
// import {harvest} from "./harvest";
// import {heal} from "./heal";
// import {move} from "./move";
// import {repair} from "./repair";
// import {reserve} from "./reserve";
// import {transfer} from "./transfer";
// import {upgrade} from "./upgrade";
// import {withdraw} from "./withdraw";
//
// let operationList :any[] = new Array();
//
// operationList["attack"] = attack;
// operationList["build"] = build;
// operationList["dismantle"] = dismantle;
// operationList["harvest"] = harvest;
// operationList["heal"] = heal;
// operationList["move"] = move;
// operationList["repair"] = repair;
// operationList["reserve"] = reserve;
// operationList["transfer"] = transfer;
// operationList["upgrade"] = upgrade;
// operationList["withdraw"] = withdraw;
//
//
// export var operations = operationList;

import {operation} from "../operation";
import {attack} from "./attack";
import {build} from "./build";
import {dismantle} from "./dismantle";
import {hashTable} from "../support/hashTable";
import {harvest} from "./harvest";
import {move} from "./move";
import {repair} from "./repair";
import {heal} from "./heal";
import {reserve} from "./reserve";
import {transfer} from "./transfer";
import {upgrade} from "./upgrade";
import {withdraw} from "./withdraw";


export * from "./attack";
export * from "./build";
export * from "./dismantle";
export * from "./harvest";
export * from "./heal";
export * from "./move" ;
export * from "./repair";
export * from "./reserve";
export * from "./transfer";
export * from "./upgrade";
export * from "./withdraw";

let allops: hashTable<operation> = {};

allops["attack"] =  attack;
allops["build"] = build;
allops["dismantle"] = dismantle;
allops["harvest"] = harvest;
allops["heal"] = heal;
allops["move"] = move;
allops["repair"] = repair;
allops["reserve"] = reserve;
allops["transfer"] = transfer;
allops["upgrade"] = upgrade;
allops["withdraw"] = withdraw;


export const all = allops;
