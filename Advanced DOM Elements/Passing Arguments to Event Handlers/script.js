////////////////////////////////////////////////
////////////////////////////////////////////////

// passing Arguments to event handlers

const passHandler = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

const navContainer = document.querySelector(".nav");

navContainer.addEventListener("mouseover", passHandler.bind(0.5));
// {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

navContainer.addEventListener("mouseout", passHandler.bind(1));
// {
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target;
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//   const logo = link.closest('.nav').querySelector('img');
//   siblings.forEach((el) => {
//     if (el !== link) el.style.opacity = 1;
//   });

//   logo.style.opacity = 1;
// }
// });
