// problem-1

function mindGame(num) {
  const result = (num * 3 + 10) / 2 - 5;

  return parseFloat(result);
}

const result = mindGame(33);
console.log(result); //49.5

//Problem 2: Finding even or odd

function evenOdd(string) {
  const lengthOfString = string.length;
  if (lengthOfString % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const output = evenOdd("chatgpt");
console.log(output); // odd

//Problem 3: Is Less or Greater than seven

function isLGSeven(number) {
  if (typeof number !== "number") {
    return "Please enter a valid number";
  }
  const result = number - 7;

  if (result < 7) {
    return result;
  } else {
    return number * 2;
  }
}

const outputVal = isLGSeven(6);
console.log(outputVal); //-1

//Problem 4: Finding Bad data

function findingBadData(numbers) {
  let badData = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number <= 0) {
      badData++;
    }
  }
  return badData;
}

const numbers = [-4, -9, -5, -33, -55];

const resultOfDataType = findingBadData(numbers);
console.log(resultOfDataType); //5

//Problem 5: Convert your gems into diamond

function gemsToDiamond(first, second, third) {
  if (
    typeof first !== "number" ||
    typeof second !== "number" ||
    typeof third !== "number"
  ) {
    return "Please enter a valid number";
  }

  const diamondOfFirstFriend = first * 21;
  const diamondOfSecondFriend = second * 32;
  const diamondOfThirdFriend = third * 43;
  const totalDiamond =
    diamondOfFirstFriend + diamondOfSecondFriend + diamondOfThirdFriend;

  if (totalDiamond > 2000) {
    return totalDiamond - 2000;
  } else {
    return totalDiamond;
  }
}

const totalDiamond = gemsToDiamond(20, 200, 50);
console.log(totalDiamond); //6970
