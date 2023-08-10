// continue keyword

// for (i = 1; i < 20; i++) {
//   if (i > 5) {
//     continue;
//   }
//   console.log(i);
// }

var numbers = [25, 35, 45, 49, 51, 59];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];

  if (number > 50) {
    continue;
  }
  console.log(number); //25 35 45 49
}
