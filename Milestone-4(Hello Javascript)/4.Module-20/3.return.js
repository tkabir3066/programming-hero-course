// usage of return keyword

// function add(num1, num2) {
//   var sum = num1 + num2;
// }

// var result = add(50, 20);

// console.log("result = ", result); // undefined

//------------------------------------------------------------//

// function add(num1, num2) {
//   var sum = num1 + num2;

//   return;
// }

// var result = add(50, 20);

// console.log("result = ", result); // undefined

//------------------------------------------------------------//

function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var total = add(50, 20);

// console.log("Total = ", total); // 70

function bringSingara(money) {
  var singaraPrice = 10;
  var quantity = money / singaraPrice;

  return quantity;
}

var totalSingara = bringSingara(100);
console.log("Total Singara = ", totalSingara); //10
