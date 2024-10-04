"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(new Array(7));

// empty Array + fill method

const arr1 = new Array(7);
console.log(arr1);

// console.log(arr.map((mov) => 5));
arr1.fill(1);
console.log(arr1);

arr1.fill(2, 3);
console.log(arr1);

// Array.from

// console.log(Array.from({ length: 7 }, () => 5));
// console.log(Array.from({ length: 7 }, (_, i) => i + 1));

// labelBalance.addEventListener("click", function () {
//   const movementUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("♏", ""))
//   );
//   console.log(movementUI);
//   const movementsUI2 = [...document.querySelectorAll(".movements__value")];
// });

// Array method practice:

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((acc) => acc > 0)
  .reduce((acc, curr) => acc + curr);
console.log(bankDepositSum);

const bankDeposit2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => (curr >= 1000 ? ++acc : acc), 0);

console.log(bankDeposit2);

// prefixed + operator
let a = 10;
console.log(a++);
console.log(++a);
console.log(a);

const sum = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sum.deposits += curr) : (sum.withdrawals += curr);
      // return sum;
      sums[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sum);

// 4)
// this is a word --> This Is a Word
function createFunction(title) {
  const expection = ["a", "an", "is", "on", "that", "this"];
  const output = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      expection.includes(word) ? word[0].toUpperCase() + word.slice(1) : ""
    );
  return output.join(" ");
}

console.log(createFunction("this is a Title"));
console.log(createFunction("this is a Title and but to long word"));
console.log(createFunction("this is a Title not a long word"));
