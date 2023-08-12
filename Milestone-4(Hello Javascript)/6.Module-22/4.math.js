const result = Math.pow(2, 3);
// console.log(result);

// Math.abs()

// const num1 = 25;
// const num2 = 45;

// const gap = Math.abs(num1 - num2);

// if (gap < 5) {
//   console.log("You guys can be friend");
// } else {
//   console.log("You must stay apart");
// }

//=====  Math.round() ==========//

const num1 = 2.4999;
const fullNum1 = Math.round(num1);
console.log(fullNum1); // 2

const num2 = 2.5;
const fullNum2 = Math.round(num2);
console.log(fullNum2); // 3

//=====  Math.floor() ==========//

const fullNum3 = Math.floor(num1);
console.log(fullNum3); //2

const fullNum4 = Math.floor(num2);
console.log(fullNum4); //2

//=====  Math.ceil() ==========//

const fullNum5 = Math.ceil(num1);
console.log(fullNum5); //3

//======== Math.random() =========//

console.log(Math.random());

for (i = 0; i < 10; i++) {
  console.log(Math.round(Math.random() * 100));
}
