// properties

const shoppingCart = {
  books: 3,
  sunglass: 1,
  Keyboard: 3,
  mouse: 1,
  pen: 25,
};

//1. when you know specific propertyName , use dot(.) notation to get the property value

const penCount = shoppingCart.pen;
console.log(penCount); //25

// alternative system
// 2.when you know specific propertyName , use bracket [] notation to get the property value

const penCount2 = shoppingCart["pen"];

console.log(penCount2); //25

//3. dynamically accessing properties values
// const propName = "mouse";
// const propVal = shoppingCart[propName];
// console.log(propVal); //1
///--------------------------------------------------------------------------------------////

// if we need only properties only

const properties = Object.keys(shoppingCart);
console.log(properties); //[ 'books', 'sunglass', 'Keyboard', 'mouse', 'pen' ]

// if we need only property values only

const propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues); //[ 3, 1, 3, 1, 25 ]

// set properties value

shoppingCart.mouse = 15;

console.log(shoppingCart); //{ books: 3, sunglass: 1, Keyboard: 3, mouse: 15, pen: 25 }

shoppingCart["mouse"] = 29;
console.log(shoppingCart); //{ books: 3, sunglass: 1, Keyboard: 3, mouse: 29, pen: 25 }

const books = "books";
shoppingCart[books] = 10;
console.log(shoppingCart); //{ books: 10, sunglass: 1, Keyboard: 3, mouse: 29, pen: 25 }

const entries = Object.entries(shoppingCart);
console.log(entries);

/* 
[ [ 'books', 10 ],
  [ 'sunglass', 1 ],
  [ 'Keyboard', 3 ],
  [ 'mouse', 29 ],
  [ 'pen', 25 ] ]
*/
