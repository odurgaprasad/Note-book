//Default Parameter
let bookings = [];
function createBooking(flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers=numPassengers||1
  // price=price||199
  const booking = {
    flightNum,
    numPassengers,
    price: price * numPassengers,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking("LA3456", 345, 2000);
createBooking("LA3456", 1, 1000);
createBooking("LA3456", 345, 667);
createBooking("LA3456", 23, 200);
createBooking("LA3456", undefined, 200);
