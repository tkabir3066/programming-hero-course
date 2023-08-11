//factorial with while loop

function factorial(number) {
  let fact = 1;
  let i = 1;
  while (i <= number) {
    fact = fact * i;
    i++;
  }

  return fact;
}

const num = 5;
const result = factorial(num);
console.log("Factorial of ", num, " = ", result); //Factorial of  5  =  120
