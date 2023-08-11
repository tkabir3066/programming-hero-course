// 1+2+3+4+5+....+n

/* 
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log(sum); */

function sumOfNums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

const sumOfNumbers = sumOfNums(10);
console.log(sumOfNumbers); //55
