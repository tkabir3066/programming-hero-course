// object

const student = {
  id: 111,
  name: "Tutul Kabir",
  class: 9,
  marks: 98,
};

const mobile = {
  brand: "Samsung",
  price: 19000,
  storage: "64gb",
  camera: "7MP",
};

const myComputer = {
  brand: "Lenovo",
  price: 39000,
  color: "silver",
  processor: "i7",
};

// accessing the properties values

console.log(myComputer.brand); // Lenovo
console.log(myComputer.price); // 39000
console.log(myComputer.color); // silver
console.log(myComputer.processor); // i7

// re-assign value of a property

myComputer.processor = "i9";
console.log(myComputer);
/* { brand: 'Lenovo',
  price: 39000,
  color: 'silver',
  processor: 'i9' } */
