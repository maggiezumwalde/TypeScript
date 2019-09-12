var readLineSync = require('readline-sync');

import { Stuffy } from "../model/stuffy.class";
console.log('Welcome to the stuffy despenser app!');

// create instance of stuffy
let s1: Stuffy = new Stuffy(1, "giraffe", "blue", "s", 3);
let s2: Stuffy = new Stuffy(2, "elephant","pink", "l", 4);
let s3: Stuffy = new Stuffy(3, "kitty","orange", "m", 4);
let s4: Stuffy = new Stuffy(4, "pup","black", "l", 3);

// create array for stuffy
let stuffarr: Array<any> = new Array();
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
for(let i: number = 0; i < stuffarr.length; i++) {
    // console.log(stuffarr[i].about());
    let stuffy: Stuffy = stuffarr[i];
    console.log(stuffy.id+'\t'+stuffy.type+'\t'+stuffy.color+'\t'+stuffy.size+'\t'+stuffy.limbs)
}

//prompt user for id
let id: number = readLineSync.questionInt('Which id would you like to get?');
stuffarr.forEach( s => {
    if(s.id == id)
    console.log(s.about());
    
});
//call get stuffy function
getStuffy(id);
function getStuffy(i: number): void {
for(let s of stuffarr) {
if (s.id ==id) {
    console.log(s.about());
      }
   }
}


console.log('Bye!'); 