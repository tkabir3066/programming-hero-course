// splice

//1.Removes elements from an array
//2.and, if necessary, inserts new elements in their place,
//3.returning the deleted elements.
//4. will change the original array

/* The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice(). */

/* splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item0)
splice(start, deleteCount, item0, item1)
splice(start, deleteCount, item0, item1,*/
const friends = [12, 13, 14, 16, 21, 23, 34, 45, 54, 66];
const partial = friends.splice(2, 5, 444, 555, 666);
console.log(partial); //[ 14, 16, 21, 23, 34 ]
console.log(friends); //[ 12, 13, 444, 555, 666, 45, 54, 66 ]
//will change the original array
