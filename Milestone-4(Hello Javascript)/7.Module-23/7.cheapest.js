//Find the cheapest phone from an array of phone objects

const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Realme",
    camera: 10,
    storage: "128gb",
    price: 45000,
    color: "yellow",
  },
  {
    name: "Mi",
    camera: 12,
    storage: "64gb",
    price: 37000,
    color: "black",
  },
  {
    name: "Walton",
    camera: 13.5,
    storage: "64gb",
    price: 40000,
    color: "pink",
  },
  {
    name: "Vivo",
    camera: 13,
    storage: "128gb",
    price: 40000,
    color: "green",
  },
  {
    name: "spice",
    camera: 13.5,
    storage: "64gb",
    price: 31000,
    color: "white",
  },
  {
    name: "Motorola",
    camera: 13,
    storage: "128gb",
    price: 35000,
    color: "silver",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];

  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];

    if (cheapest.price > phone.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);

console.log(mySelection);
