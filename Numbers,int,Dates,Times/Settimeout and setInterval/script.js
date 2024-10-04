"use strict";

setTimeout(() => console.log("hello, This is a SetTimeOut method"), 4000);

console.log("Hello");

setInterval(
  () =>
    console.log(
      new Intl.DateTimeFormat("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date())
    ),
  1000
);
