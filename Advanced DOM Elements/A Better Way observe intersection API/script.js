//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// A Better way: The intersection observer API

// const obsCallbacks = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallbacks, obsOptions);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = navContainer.getBoundingClientRect().height;

console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) navContainer.classList.add("sticky");
  else navContainer.classList.remove("sticky");
};

const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObs.observe(header);
