"use strict";

//Square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(27 ** (1 / 3));

console.log(Math.min(2, 4, 5, 6, 20));

console.log(Math.max(2, 5, 6, 4, 8, 100));

console.log(Math.PI * parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => {
  console.log(Math.trunc(Math.random() * (max - min) + 1) + min);
};
randomInt(10, 20);
console.log(Math.ceil(23.45));
console.log(Math.ceil(23.3));

console.log(Math.round(23.4));
console.log(Math.round(23.8));

//rounding Decimals
console.log((2.3).toFixed(2));
console.log((2.34).toFixed(2));
console.log((2).toFixed(2));
console.log((2.3456).toFixed(4));

//The Remainder operator

console.log(8 % 2);
console.log(8 / 2);
console.log(8 % 2 === 0);
console.log(8 / 2 === 0);
const isEven = (n) => n % 2 === 0;
console.log(isEven(34));
console.log(isEven(343));
console.log(isEven(348));

//Number Converstion

const diameter = 25_64_46_779_00;
console.log(diameter);

console.log(234_34_344_2);

//PI=3_.142334 Error
//PI=3._142334 Error
const PI = 3.14_2324;
console.log(PI);

console.log(Number("23456_94"));
