const country = "Bangladesh";
const age = 23;
const isIndependent = true;
const student = { id: 121, class: 11, name: "Agun" };

const friends = [13, 12, 15, 21, 23];

function add() {}

console.log(typeof country); //string
console.log(typeof age); //number
console.log(typeof isIndependent); //boolean
console.log(typeof student); //object
console.log(typeof friends); //object
console.log(typeof add); // function

//----------------------------------------------------------------------------//

// how to detect it's a array or not using Array.isArray()

console.log(Array.isArray(friends)); //true

//-----------------------------------------------------------------------------//

console.log(friends.includes(15)); // true
console.log(friends.includes(35)); // false

//or

if (friends.indexOf(15) !== -1) {
  console.log("Valid user");
} else {
  console.log("Invalid user");
}

// indexOf theke includes ta beshi use korbo amra future a

// concat method

const newFriends = [16, 17, 19];
const allFriends = newFriends.concat(friends);
console.log(allFriends); //[ 16, 17, 19, 13, 12, 15, 21, 23 ]
