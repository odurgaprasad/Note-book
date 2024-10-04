"use strict";

let a = ["a", "b", "c", "d", "e"];
//slice
console.log(a.slice(2));
console.log(a.slice(1, 2));
console.log(a.slice(-4, -1));
console.log(a.slice(-4, 1));
console.log(a.slice(0, -1));
console.log("/////////////////");
//splice
console.log(a);
a.splice(2, 1);
console.log(a);
a.splice(1, 2);
console.log(a);

// reverse

let arr = ["f", "g", "h", "i", "j", "k"];
console.log(arr.reverse());

//concat

let b = ["a", "b", "c", "d", "e"];
let c = ["f", "g", "h", "i", "j"];

console.log(b.concat(c));
console.log([...b, ...c]);

// JOIN
let result = b.join("_");
console.log(result);
