let flight = "LA345";
let passenger = {
  name: "Durgaprasad",
  passport: 234353632,
};

function getValues(flightNum, passengerName) {
  passengerName.name = "Mr." + passengerName.name;
  if (passengerName.passport === 234353632) {
    alert("checked IN");
  } else {
    alert("Wrong Details");
  }
}

getValues(flight, passenger);
