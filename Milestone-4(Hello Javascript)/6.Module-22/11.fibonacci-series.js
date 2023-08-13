// fibonacci series
// x[n] = x[n−1] + x[n−2]

//========= approach-1 without array===========//
/* const n = 7;
let fibo,
  first = 0,
  second = 1;

for (let count = 0; count < n; count++) {
  if (count <= 1) {
    fibo = count;
  } else {
    fibo = first + second;
    first = second;
    second = fibo;
  }

  console.log(fibo);
}
 */

//========= approach-2 with array===========//

let n = 7;
const fibo = [0, 1];

for (let i = 2; i <= n; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); //[ 0, 1, 1, 2, 3, 5, 8, 13 ]
