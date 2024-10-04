const headingEle = document.createElement("h1");
headingEle.innerHTML = "This is a heading Element";
const bodyEle = document.querySelector("body");
console.log(bodyEle);
bodyEle.appendChild(headingEle);

const alert1 = function (e) {
  alert("addEventListener:This is a Great time to see you!!");
};

// headingEle.addEventListener("mouseenter", alert1);
setTimeout(() => headingEle.addEventListener("mouseenter", alert1), 3000);

// headingEle.onmouseenter = function (e) {
//   alert("onmouseenter:This is a Great time to see you!!");
// };
