//////////////////////////////////////////////////////////

//Styles

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.BackgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

const logo = document.querySelector(".nav__logo");

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimlist logo";

//Non-standard

console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");

console.log(link.href);
console.log(link.getAttribute("href"));

//Data Attributes

console.log(logo.dataset.versionNumber);

//classes

console.log(logo.classList.add("c"));
console.log(logo.classList.remove("c"));
console.log(logo.classList.toggle("c"));
console.log(logo.classList.contains("c"));

// don't use

logo.className = "jonas";
