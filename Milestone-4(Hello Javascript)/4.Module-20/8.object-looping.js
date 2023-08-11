// array vs object

const shoppingItems = ["t-shirt", "jeans", "bottle", "perfume"];
const friendsAge = [25, 30, 29, 28, 32];

const ageOfFriends = {
  mohim: 25,
  sohaj: 30,
  raya: 29,
  kanij: 28,
  babbar: 32,
};

// looping
const shoppingCart = {
  books: 3,
  sunglass: 1,
  Keyboard: 3,
  mouse: 1,
  pen: 25,
  shoes: 2,
};

const keys = Object.keys(shoppingCart);
console.log(keys); //[ 'books', 'sunglass', 'Keyboard', 'mouse', 'pen', 'shoes' ]

const values = Object.values(shoppingCart);
console.log(values); //[ 3, 1, 3, 1, 25, 2]

// simple for loop on keys array

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

/* 
output:

books 
sunglass 
Keyboard 
mouse 
pen 
shoes
*/

for (let i = 0; i < keys.length; i++) {
  const propertyName = keys[i];
  const propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}

// for in loop

for (let propertyName in shoppingCart) {
  let propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}
