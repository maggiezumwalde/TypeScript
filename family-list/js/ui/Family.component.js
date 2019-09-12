"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Family_1 = require("../model/Family");
console.log('Welcome to the family list');
var f1 = new Family_1.Family("Linda", 37, "Linda@gmail.com", false);
var f2 = new Family_1.Family("Jenny", 35, "Jenny@gmail.com", false);
var f3 = new Family_1.Family("Gina", 33, "Gina@gmail.com", false);
var f4 = new Family_1.Family("Andy", 31, "Andy@gmail.com", false);
var f5 = new Family_1.Family("Kenny", 29, "Kenny@gmail.com", true);
var f6 = new Family_1.Family("Maggie", 27, "Maggie@gmail.com", true);
var f7 = new Family_1.Family("Julie", 25, "Julie@gmail.com", true);
var familylist = new Array();
familylist.push(f1);
familylist.push(f2);
familylist.push(f3);
familylist.push(f4);
familylist.push(f5);
familylist.push(f6);
familylist.push(f7);
for (var Family_2 in familylist) {
    console.log(name);
}
