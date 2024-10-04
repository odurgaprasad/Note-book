const oneWord = function (str) {
  return str.replace(/ /g, "");
};

const firstUpperWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transform = function (str, fn, gn) {
  console.log(`original String:${str}`);
  console.log(`second function String :${fn(str)}`);
  console.log(`firstFunction string :${gn(str)}`);
};

transform("This is Higherorder function", firstUpperWord, oneWord);

//example - 2
function high5() {
  console.log("👋👋");
}

document.body.addEventListener("click", high5);
