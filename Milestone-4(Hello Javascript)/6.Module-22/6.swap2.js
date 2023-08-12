//without temp variable and destructuring

let first = 5;
let second = 7;

/* // approach-1 (with '+' and '-')
console.log(`Before swapping first = ${first} and second = ${second}`);
//Before swapping first = 5 and second = 7

first = first + second;
second = first - second;
first = first - second;

console.log(`After swapping first = ${first} and second = ${second}`);
// After swapping first = 7 and second = 5
 */

// approach-2 (with "*" and "/")
console.log(`Before swapping first = ${first} and second = ${second}`);
//Before swapping first = 5 and second = 7

first = first * second;
second = first / second;
first = first / second;

console.log(`After swapping first = ${first} and second = ${second}`);
// After swapping first = 7 and second = 5
