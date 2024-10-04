"use strict";

console.log(23 == 23.0);

console.log(0.1 + 0.2 === 0.3);

console.log(Number("23"));

//Converstion
console.log(+"23");
//Parsing
console.log(parseInt("56mk"));
console.log(parseInt("mk45"));
console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

//console.log(parseFloat("2.5rem"))

console.log(isNaN("23"));
console.log(isNaN(+"23"));
console.log(isNaN("239ml"));
console.log(isNaN("mlk239ml"));
console.log(isNaN(20 / 0));
console.log(isNaN(20));

//checking the value is the Number
console.log("----you------");
console.log(isFinite(20));
console.log(isFinite("20"));
console.log(isFinite(+"20"));
console.log(isFinite(20 / 0));
console.log(isFinite("23iop"));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger(20 / 0));
