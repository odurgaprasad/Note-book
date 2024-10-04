///////////////////////////////////////////////////////////////

// dom lifecycle

document.addEventListener("DOMContentLoaded", function (e) {
  console.log(e);
});

window.addEventListener("load", function (e) {
  console.log(e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
