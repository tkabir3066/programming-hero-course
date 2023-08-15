// Calculate the total cost of the products in a shopping cart

const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 2000, quantity: 5 },
  { name: "pant", price: 3300, quantity: 4 },
  { name: "belt", price: 600, quantity: 3 },
];

function totalCost(shoppingCart) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const product = shoppingCart[i];
    const productTotal = product.price * product.quantity;
    total = total + productTotal;
  }

  return total;
}

const totalExpense = totalCost(shoppingCart);

console.log("Total cost of products = ", totalExpense); //7100
