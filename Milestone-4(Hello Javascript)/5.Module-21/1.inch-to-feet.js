// const myInches = 12;
// const myFeet = myInches / 12;

// console.log(myFeet); //1

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;

// console.log(dadaFeet); //12

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;

// console.log(dadiFeet); //5

function getInchToFeet(inches) {
  let feet = inches / 12;

  return feet.toFixed(1);
}

const myInch = getInchToFeet(80);
console.log(myInch); // 6.7

const dadaInch = getInchToFeet(75);
console.log(dadaInch); //6.3

const dadiInch = getInchToFeet(65);
console.log(dadiInch); //5.4
