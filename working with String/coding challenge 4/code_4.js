// coding challenge

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):

// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data

const testData = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
];

for (let x of testData) {
  const indexNum = x.indexOf("_");
  const firstWord = x.slice(0, indexNum);
  const lastWord = x.slice(indexNum + 1, x.length);
  let lastWord1 = lastWord[0].toUpperCase() + lastWord.slice(1);
  console.log(firstWord + lastWord1);
}

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
let buttonEl = document.querySelector("button");
buttonEl.textContent = "Save";
document.querySelector("button").addEventListener("click", function () {
  let textData1 = document.querySelector("textarea");

  let textData = textData1.value.split("\n");
  for (let [i, x] of textData.entries()) {
    const [first, second] = x.toLowerCase().trim().split("_");
    // let data = `${first}${second[0].toUpperCase() + second.slice(1)}`;
    let data = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${data.padEnd(20)} ${"✅".repeat(i + 1)} `);
  }
});
