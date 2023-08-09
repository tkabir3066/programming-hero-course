//push method
//The push() method adds the specified elements to the end of an array and returns the new length of the array.
//The push() method is similar to the unshift() method as it adds an element to the end of an array rather than the beginning. It returns the length of the new array and, like the unshift() method, can be used to add more than one element.

var numbers = [23, 45, 56, 34, 67];

console.log(numbers); //[ 23, 45, 56, 34, 67 ]

numbers.push(77);
console.log(numbers); //[ 23, 45, 56, 34, 67, 77 ]

var friends = ["balam", "kalam", "salam"];
console.log(friends); //[ 'balam', 'kalam', 'salam' ]

friends.push("gelam");
friends.push("pailam");
console.log(friends); //[ 'balam', 'kalam', 'salam', 'gelam','pailam' ]

//===== If you need to add an element to the beginning of your array, use unshift() ===//
