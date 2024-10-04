/////////////////////////////////////////

// selecting,creaing,and deleting

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allsections = document.querySelectorAll(".section");
console.log(allsections);

const allbuttons = document.getElementsByTagName("button");
console.log(allbuttons);

console.log(document.getElementsByClassName("btn"));

//creating and inserting elements
// .insertadjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  "we use cokkied for improved functionality and analytics.";
message.innerHTML =
  'we use cokkied for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//Deleting elements:

document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.parentElement.removeChild(message);
  });
