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

const findMethod = movements.find((mov) => mov < 0);
console.log(findMethod); // execute the first item of the given array
const findMethod1 = accounts.find((acc) => acc.owner === "Sarah Smith");
console.log(findMethod1);

console.log(movements);

//includes
const includesEl = movements.includes(-130);
console.log(includesEl);

// Some and every

const someArray = movements.some((mov) => mov > 0);
const someArray1 = movements.some((mov) => mov === -130);
console.log(someArray);
console.log(someArray1);

// Every

const everyMethod = movements.every((mov) => mov > 0);
const everyMethod1 = account4.movements.every((mov) => mov > 0);
const everyMethod2 = account4.movements.every((mov) => mov === -130);

console.log(everyMethod);
console.log(everyMethod1);
console.log(everyMethod2);

// separate callback

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// Flat
const arr = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5, 6],
];
console.log(arr);
console.log(arr.flat());

const arrDeep = [
  [1, [2, 3]],
  [[2, 3], 4],
  [4, [5, 6]],
];

console.log(arrDeep);
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

const flatMethod = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);
console.log(flatMethod);

//flatMap
const flatMethod1 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);
console.log(flatMethod);

// sorting array
movements.sort();
console.log(movements);

//return < 0 ,a,b (keep in order)
// return >0 ,a,b(switch order)
//assecending

// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
movements.sort((a, b) => a - b);

console.log(movements);
//Deseceding order

// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }
// });

movements.sort((a, b) => b - a);

console.log(movements);
