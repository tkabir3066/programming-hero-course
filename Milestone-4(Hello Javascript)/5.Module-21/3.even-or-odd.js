// input1 : 98
// output1: true

// input2 : 117
// output1: false

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const result1 = isEven(98);
console.log(result1); // true

const result2 = isEven(117);
console.log(result2); // false
