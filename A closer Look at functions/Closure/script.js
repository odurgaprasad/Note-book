"use strict";

const closureForm = function () {
  let passengerNum = 0;
  return function () {
    passengerNum++;
    console.log(`${passengerNum} passenger`);
  };
};

let booker = closureForm();
booker();
booker();
booker();

//more closure examples:
//example-1
let h;

const g = function () {
  const a = 23;
  h = function () {
    console.log(a * 2);
  };
};

const i = function () {
  const b = 343;
  h = function () {
    console.log(b ** 3);
  };
};
g();
h();

// re - assigning h function;
i();
h();

//example-2

const abc = function (n, wait) {
  const perSecond = n / 3;
  console.log(`this is the train passenger List ${n}`);

  setTimeout(() => {
    console.log(`bording time passenger ${perSecond}`);
  }, 1000 * wait);

  console.log(`will be wait in ${wait} seconds`);
};
abc(180, 3);
