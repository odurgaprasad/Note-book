//Building slider Component:part 1

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

//slider component -2
const dotContainer = document.querySelector(".dots");
const createDot = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide=${i}></button>`
    );
  });
};
createDot();

const activateDots = function (slide) {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  });
};
// end -2

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

let currSlide = 0;
let maxLength = slides.length;
let min = 0;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);
//next slide

const nextSlide = function () {
  if (maxLength - 1 === currSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDots(currSlide);
};

//previous slide
const preSlide = function () {
  if (min === currSlide) {
    currSlide = maxLength - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDots(currSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", preSlide);

//slider Component-2
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "ArrowRight") nextSlide();
  e.key === "ArrowLeft" && preSlide();
});

dotContainer.addEventListener("click", function (e) {
  const { slide } = e.target.dataset;
  goToSlide(slide);
  activateDots(slide);
});
