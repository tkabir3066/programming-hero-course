// break keyword

// for (i = 0; i < 20; i++) {
//   if (i > 5) {
//     break;
//   }
//   console.log(i);
// }

//------------------------------------------------------------------//
// var roastGiven = 0;

// while (roastGiven < 10) {
//   if (roastGiven > 4) {
//     break;
//   }

//   console.log("Roast den, please");
//   roastGiven++;
// }

//------------------------------------------------------------------//

var items = ["bottle", "pen", "paper", "pencil", "chalk"];

for (var i = 0; i < items.length; i++) {
  var item = items[i];
  if (item === "paper") {
    break;
  }
  console.log(item);
}
