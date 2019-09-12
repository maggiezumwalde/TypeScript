"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require('readline-sync');
var stuffy_class_1 = require("../model/stuffy.class");
console.log('Welcome to the stuffy despenser app!');
// create instance of stuffy
var s1 = new stuffy_class_1.Stuffy(1, "giraffe", "blue", "s", 3);
var s2 = new stuffy_class_1.Stuffy(2, "elephant", "pink", "l", 4);
var s3 = new stuffy_class_1.Stuffy(3, "kitty", "orange", "m", 4);
var s4 = new stuffy_class_1.Stuffy(4, "pup", "black", "l", 3);
// create array for stuffy
var stuffarr = new Array();
stuffarr.push(s1);
stuffarr.push(s2);
stuffarr.push(s3);
stuffarr.push(s4);
// let q1 :any = readLineSync.question('Id? : ');
// let q2 :any = readLineSync.question('Animal? : ');
// let q3 :any = readLineSync.question('Color? : ');
// let q4 :any = readLineSync.question('Size? Choose S, M, or L : ');
// let q5 :any = readLineSync.question('Number of limbs?: ');
// let q6: Stuffy = new Stuffy(q1,q2,q3,q4,q5);
// stuffarr.push(q6);
console.log('List of all the stuffies: ');
console.log('id\ttype\tcolor\tsize\tlimbs');
console.log('===\t====\t=====\t=====\t======');
for (var i = 0; i < stuffarr.length; i++) {
    // console.log(stuffarr[i].about());
    var stuffy = stuffarr[i];
    console.log(stuffy.id + '\t' + stuffy.type + '\t' + stuffy.color + '\t' + stuffy.size + '\t' + stuffy.limbs);
}
//prompt user for id
var id = readLineSync.questionInt('Which id would you like to get?');
stuffarr.forEach(function (s) {
    if (s.id == id)
        console.log(s.about());
});
//call get stuffy function
getStuffy(id);
function getStuffy(i) {
    for (var _i = 0, stuffarr_1 = stuffarr; _i < stuffarr_1.length; _i++) {
        var s = stuffarr_1[_i];
        if (s.id == id) {
            console.log(s.about());
        }
    }
}
console.log('Bye!');
