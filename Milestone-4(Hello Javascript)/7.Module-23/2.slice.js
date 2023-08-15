// slice.js
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// Returns a copy of a section of an array.
// For both start and end, a negative index can be used to indicate an offset from the end of the array.
//For example, -2 refers to the second to last element of the array.

const friends = [12, 13, 14, 16, 21, 23, 34, 45, 54, 66];

const partial = friends.slice(5, 7);

console.log(partial); //[ 23, 34 ]
