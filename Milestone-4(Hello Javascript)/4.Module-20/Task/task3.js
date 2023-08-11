//2. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values;

function make_avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  let avg = sum / arr.length;
  return avg;
}

const numbers = [15, 27, 37, 45];

let average = make_avg(numbers);
console.log(average); // 31
