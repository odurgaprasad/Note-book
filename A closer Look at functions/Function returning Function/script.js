"use Strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const heyGreeting = greet("Hey");
heyGreeting("ODP");
heyGreeting("MR.ODP");
//or
greet("HEY")("ODP");
greet("HEY")("MR.ODP");

//Arrow Function

const greet1 = (greeting1) => (name1) => {
  console.log(`${greeting1} ${name1}`);
};

greet1("Hello")("Kakinada");
