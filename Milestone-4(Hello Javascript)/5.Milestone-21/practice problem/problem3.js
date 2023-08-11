// Write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a Leap year. If a year is a Leap year insert that year in a new array, return the new array and print the result.

function findLeapYear(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let year = array[i];

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      newArr.push(year);
    }
  }

  return newArr;
}

const years = [2023, 2024, 2025, 2028, 2030];

const result = findLeapYear(years);
console.log(result);
