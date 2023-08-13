// write a function that will take 3 numbers and will return the max number

function getMaxNum(num1, num2, num3) {
  const max = Math.max(num1, num2, num3);

  return max;
}

const result = getMaxNum(69, 98, 79);

console.log(result); //98
