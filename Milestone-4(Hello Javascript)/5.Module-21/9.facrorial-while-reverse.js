// factorial while reverse

function factorial(number) {
  let fact = 1;

  let i = number;
  while (i >= 1) {
    fact = fact * i;
    i--;
  }

  return fact;
}

const number = 5;
const result = factorial(number);

console.log("Factorial of ", number, " = ", result); // Factorial of  5  =  120
