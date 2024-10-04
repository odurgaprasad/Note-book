// working with String-1,2,3
"use strict";

let word1 = "Free advice to the Polution";
let word2 = "This is a Sample String";

console.log(word1.length);
console.log(word2.length);

console.log(word1.indexOf("P"));
console.log(word1.lastIndexOf("P"));

console.log(word1.slice(0, word1.lastIndexOf("a")));

console.log(word1.toLowerCase());
console.log(word1.toUpperCase());
console.log(word1);
word1 = word1.split(" ");
let newWord = [];
for (let x of word1) {
  newWord.push(x[0].toUpperCase() + x.slice(1));
}

console.log(newWord.join(" "));

function numberStart(number) {
  const str = number + " ";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
}

console.log(numberStart("345667765"));

//String Practice
const flights =
  "_Delayed_Departure;fao93766109;txl213375840;11:25 +_Arrival;bru0943384722;fao93766109;11:45 +_Delayed_Arrival;hel7439299980;fao93766109;12:05 +_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25 )
//        Arrival from BRU to FAO (11h45 )
// 🔴 Delayed Arrival from HEL to FAO (12h05)
//        Departure from FAO to LIS (12h30)

const getValue = (str) => str.slice(0, 3).toUpperCase();
for (let flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : " "}${type.replaceAll(
    "_",
    " "
  )} from ${getValue(from)} to ${getValue(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(40);

  console.log(output);
}
