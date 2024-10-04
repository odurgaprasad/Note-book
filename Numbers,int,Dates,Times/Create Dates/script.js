const now = new Date();
console.log(now);

console.log(new Date("aug 02 2020 6:30"));

console.log(new Date(2025, 10, 12, 23, 4, 2));

console.log(new Date(2023, 9, 26));

console.log(new Date(0));

console.log(10 * 24 * 60 * 60 * 1000);

//working with dates
const future = new Date(2024, 9, 10, 19, 15, 23);

console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getTimezoneOffset());
console.log(future.toISOString());
console.log(future.toDateString());

// operation with dates

const future1 = new Date(2025, 10, 24, 23, 3, 5);
console.log(future1);

const calcDisplayTime = (date1, date2) => {
  console.log(`${(date1 - date2) / (1000 * 60 * 60 * 24)} Days`);
};

calcDisplayTime(new Date(2026, 10, 24), new Date(2025, 14, 23));
