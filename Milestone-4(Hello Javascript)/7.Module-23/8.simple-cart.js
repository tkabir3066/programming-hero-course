// Calculate the total cost of the products in a shopping cart

const shoppingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 2000 },
  { name: "pant", price: 3300 },
  { name: "belt", price: 600 },
];

function totalCost(shoppingCart) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const product = shoppingCart[i];
    total = total + product.price;
  }

  return total;
}

const totalExpense = totalCost(shoppingCart);

console.log("Total cost of products = ", totalExpense); //7100
