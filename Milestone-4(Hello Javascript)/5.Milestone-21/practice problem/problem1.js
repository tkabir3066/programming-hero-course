//1. Write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers

function findOddSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 !== 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
}

const numbers = [5, 7, 8, 10, 45, 30];

const result = findOddSum(numbers);

console.log(result); //57
