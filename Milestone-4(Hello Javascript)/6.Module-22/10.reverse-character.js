//characters reverse

function reverseStr(text) {
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];

    reverse = reverse + element;
  }

  return reverse;
}

const myStr = "I am a good boy";
const result = reverseStr(myStr);
console.log(result); // yob doog a ma I
