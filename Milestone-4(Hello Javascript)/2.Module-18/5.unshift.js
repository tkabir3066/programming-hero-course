//===== If you need to add an element to the beginning of your array, use unshift() ===//
//In JavaScript, you use the unshift() method to add one or more elements to the beginning of an array and it returns the array's length after the new elements have been added.
var numbers = [23, 45, 56, 34, 67];

console.log(numbers); //[ 23, 45, 56, 34, 67 ]

var result = numbers.unshift(10, 12);
console.log(numbers); //[ 10, 12,23, 45, 56, 34, 67 ]

//// In our explanation of the unshift() method, we also stated that it returns the length of the new array, which is true:

console.log(result); // 7
