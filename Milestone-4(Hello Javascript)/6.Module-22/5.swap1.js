// swapping numbers

let first = 5;
let second = 7;

/* // this is wrong approach
first = second;
second = first;
console.log(first, second); // 7, 7
 */

//===== right approaches=====//

/* //approach-1

const temp = first;
first = second;
second = temp;

console.log(first, second); //7,5
 */
//approach-2(destructuring)

[first, second] = [second, first];
console.log(first, second); // 7,5

// Write a javascript Program to Swap Two Numbers without using third variable. Javascript Program to Swap Two Numbers without  third variable. Here’s simple Program to Swap Two Numbers without using temp variable in javascript Programming Language.
