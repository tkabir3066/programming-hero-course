// validation

function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter a valid number";
  } else {
    return num1 + num2;
  }
}

// const result1 = add(12, "45");
// console.log(result1);
// const result2 = add(12, false);
// console.log(result2);
const result3 = add("12", false);
console.log(result3);

//----------------------------------------------------//

function multiply(num1, num2) {
  console.log(num1, num2); // 60 , undefined
  return num1 * num2;
}

const mul = multiply(12 * 5);
console.log(mul); // NaN
