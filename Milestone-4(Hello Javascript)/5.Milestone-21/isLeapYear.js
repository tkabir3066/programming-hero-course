function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  } else if (year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

const result1 = isLeapYear(1948);
console.log(result1); //Leap Year

const result2 = isLeapYear(1947);
console.log(result2); //not a Leap Year

const result3 = isLeapYear(1900);
console.log(result3); //Not a Leap Year

const result4 = isLeapYear(1600);
console.log(result4); // Leap Year
