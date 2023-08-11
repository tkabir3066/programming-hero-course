// using for loop only
// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }

// console.log("Factorial of ", num, "= ", fact);

function getFactorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
}

const number = 5;
const factorial = getFactorial(number);

console.log("Factorial of ", number, "= ", factorial); //120
