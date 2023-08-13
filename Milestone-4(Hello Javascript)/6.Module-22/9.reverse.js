// reverse a string

//approach-1

function reverseStr(text) {
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];

    reverse = reverse + element;
  }

  return reverse;
}

const str = "tutul";
const result = reverseStr(str);
console.log(result); // lutut

/* // approach-2
function reverseString(text) {
  const reversedStr = text.split("").reverse().join("");
  return reversedStr;
}

const str = "tutul";
const result = reverseString(str);
console.log(result); //lutut
 */
