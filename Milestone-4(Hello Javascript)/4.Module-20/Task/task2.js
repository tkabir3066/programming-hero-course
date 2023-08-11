//2. Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(a, b, c) {
  let sum = a + b + c;
  let avg = sum / 3;

  return avg.toFixed(2);
}

let average = make_avg(15, 22, 25);
console.log(average); //20.67
