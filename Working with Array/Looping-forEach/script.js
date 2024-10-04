"use strict";

//for loop example
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movement ${index + 1} : your deposite amount ${movement}`);
  } else {
    console.log(
      `movement ${index + 1} : your withdraw amount ${Math.abs(movement)}`
    );
  }
}
console.log("------forEach-------");
//forEach method :
movements.forEach(function (movement, index) {
  if (movement > 0) {
    console.log(`movement ${index + 1} : your deposite amount ${movement}`);
  } else {
    console.log(
      `movement ${index + 1} : your withdraw amount ${Math.abs(movement)}`
    );
  }
});

// example-3-my own (value,index)
let a = [11, 12, 13, 14, 15, 16, 16, 17];
let result = a.forEach((item, i) => {
  if (item !== 17) {
    console.log("Hello world");
  }
  console.log(item, i);
});

// forEach with Map and set

const currency = new Map([
  ["USA", "united states dollars"],
  ["IND", "indian Rupees"],
  ["PL", "sterling of poland"],
]);

currency.forEach(function (value, key, item) {
  console.log(`${key} : ${value}`);
});
