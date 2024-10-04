"use strict";

// MAP

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
let euroUSD = 1.1;
const euroUSDmap = account1.movements.map(function (mov) {
  return mov * euroUSD;
});

console.log(euroUSDmap);

const euroUSDmap1 = account1.movements.map((mov) => {
  console.log(mov * euroUSD);
});

account1.movements.map((mov, i) => {
  console.log(
    `movement ${i + 1} :  ${mov > 0 ? "deposit" : "withdrew"} ${Math.abs(mov)}`
  );
});

// Filter method :
const deposit = account1.movements.filter(function (mov) {
  return mov > 0;
});

// for (let x of account1.movements) {
//   if (x > 0) {
//     console.log(x);
//   }
// }
console.log(deposit);
console.log("=======widthdraw========");
const widthdraw = account1.movements.filter(function (mov) {
  return mov < 0;
});

console.log(widthdraw);

// Reduce Method

const balance = account1.movements.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(balance);

// let balance2 = 0;

// for (let mov of account1.movements) {
//   console.log((balance2 += mov));
// }

// MAX Number

const maxNumber = account1.movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
});

console.log(maxNumber);
