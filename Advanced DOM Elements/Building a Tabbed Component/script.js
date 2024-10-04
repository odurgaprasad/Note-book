/////////////////////////////////////////////////
//Building a Tabbed Component:

const tabs = document.querySelectorAll(".operations__tab");

const tabsContainer = document.querySelector(".operations__tab-container");

const content = document.querySelectorAll(".operations__content");

// console.log(tabs, tabsContainer, content);

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  //guard clause
  if (!clicked) return;
  //remove the classList Elements
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  content.forEach((c) => c.classList.remove("operations__content--active"));
  // activate tab
  clicked.classList.add("operations__tab--active");

  // activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
