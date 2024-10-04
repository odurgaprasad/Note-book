"use strict";

const luthsthana = {
  airline: "indigo",
  flightCode: "LH",
  bookings: [],
  book(flightNo, name) {
    console.log(
      ` ${name} is reserved seat ${this.airline},and the flight code is ${this.flightCode}${flightNo}`
    );
    this.bookings.push({ flight: `${this.flightCode}${flightNo}`, name });
  },
};
luthsthana.book(238, "ODP");
luthsthana.book(239, "ODP1");

const Eurowings = {
  airline: "Euro",
  flightCode: "EH",
  bookings: [],
};

// Does not work
// book(238, "indigio");
const books = luthsthana.book;

// CAll Method
books.call(Eurowings, 234, "Durgaprasad");
console.log(Eurowings);

books.call(luthsthana, 24, "prasad");

const swis = {
  airline: "indian air lines",
  flightCode: "IAL",
  bookings: [],
};
books.call(swis, 34, "lakshmi");
console.log(swis);

// Apply Method

const ApplyMethod = [2, "kalyani"];

books.apply(swis, ApplyMethod);

//Bind Method :

const euroBW = books.bind(Eurowings, 23);
const euroGW = books.bind(Eurowings);
const euroNW = books.bind(Eurowings);
euroBW("polland");
euroGW(34, "polland1");
euroNW(34, "polland2");

const euroLH23 = books.bind(luthsthana, 23);
euroLH23("Australia");
euroLH23("America");

luthsthana.plane = 300;
luthsthana.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};

luthsthana.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", luthsthana.buyPlane.bind(luthsthana));

//  function Method

const addTax = (rate, value) => value + value * rate;

const addVat = addTax.bind(null, 0.23);
// const addVat = value => value + value * 0.23

console.log(addVat(23));

// function returning function

const addTaxRate = function (rate) {
  return function (value) {
    return rate + rate * value;
  };
};

const addVat2 = addTaxRate(20.3);
console.log(addVat2(23));
