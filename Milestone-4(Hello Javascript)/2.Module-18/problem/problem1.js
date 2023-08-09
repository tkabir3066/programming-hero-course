// You are given an array :

var fruits = ["Apple", "Banana", "Orange"];

// a. find the index of "Banana" and replace "Banana" with "Mango"
// b. remove "Orange" and add "Watermelon"

var positionIndex = fruits.indexOf("Banana");
console.log(positionIndex); //1

fruits[1] = "Mango";

console.log(fruits); // [ 'Apple', 'Mango', 'Orange' ]

fruits.pop();
fruits.push("Watermelon");

console.log(fruits); //[ 'Apple', 'Mango', 'Watermelon' ]
