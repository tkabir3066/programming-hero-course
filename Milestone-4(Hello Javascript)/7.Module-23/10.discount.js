//Multi-layer discount price calculation

/* 
1. If ticket numbers is less than 100, per ticket price : 100
2. If ticket numbers is more than 100 but less than less than 200, first 100 tickets price will be 100 rupees per ticket, rest tickets price will be 90 rupees per ticket 
   first 100 --> 100 rs
   rest ---> 90 rs
  
3. If you purchase more than 200 tickets :
   first 100 : 100 rupees per ticket
   101-200 : 90 rupees per ticket
   200+ : 70 rupees per ticket
*/

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100Price + restTicketPrice;

    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;

    return totalCost;
  }
}

const totalPrice1 = ticketPrice(100);
console.log("Total Price = ", totalPrice1); //Total Price =  10000

const totalPrice2 = ticketPrice(120);
console.log("Total Price = ", totalPrice2); //Total Price =  11800

const totalPrice3 = ticketPrice(205);
console.log("Total Price = ", totalPrice3); //Total Price =  19350
