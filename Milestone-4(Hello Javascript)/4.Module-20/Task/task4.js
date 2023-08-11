//4. Write a function odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways :-

//  has return + has parameter
/* function odd_even(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(odd_even(20)); // Even
console.log(odd_even(21)); // Odd */

// no return and has parameters

function odd_even(num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

odd_even(20);
odd_even(21);
