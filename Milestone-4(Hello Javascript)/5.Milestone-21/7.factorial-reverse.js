// factorial in reverse way

function factorial(number) {
  let fact = 1;
  for (let i = number; i >= 1; i--) {
    fact = fact * i;
  }

  return fact;
}

const number = 5;
const result = factorial(number);

console.log("Factorial of ", number, " = ", result); //Factorial of  5  =  120
