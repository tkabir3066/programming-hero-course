var numbers = [45, 68, 78, 56, 89, 98];

console.log(numbers); //[ 45, 68, 78, 56, 89, 98 ]

//1. get element by index

console.log(numbers[0]); //45
console.log(numbers[1]); //68
console.log(numbers[4]); //89

var element = numbers[1];
console.log(element); // 68

//2. set element value by index
numbers[1] = 77;
numbers[2] = 100;
console.log(numbers); //[ 45, 77, 100, 56, 89, 98 ]

//3. find index of an element

var positionIndex = numbers.indexOf(89);
console.log(positionIndex); //4
