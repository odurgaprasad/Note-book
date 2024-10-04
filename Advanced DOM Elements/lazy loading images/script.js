///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//  lazy Loading images

const imgTarget = document.querySelectorAll("img[data-src]");

const loadingImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgHandler = new IntersectionObserver(loadingImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTarget.forEach((img) => imgHandler.observe(img));
