import{ Family } from "../model/Family";
console.log('Welcome to the family list');
let f1: Family = new Family("Linda", 37, "Linda@gmail.com", false);
let f2: Family = new Family("Jenny", 35, "Jenny@gmail.com", false);
let f3: Family = new Family("Gina", 33, "Gina@gmail.com", false);
let f4: Family = new Family("Andy", 31, "Andy@gmail.com", false);
let f5: Family = new Family("Kenny", 29, "Kenny@gmail.com", true);
let f6: Family = new Family("Maggie", 27, "Maggie@gmail.com", true);
let f7: Family = new Family("Julie", 25, "Julie@gmail.com", true);

let familylist: Array<any> = new Array();


familylist.push(f1);
familylist.push(f2);
familylist.push(f3);
familylist.push(f4);
familylist.push(f5);
familylist.push(f6);
familylist.push(f7);


for(let Family in familylist) {
    console.log(name);

}


