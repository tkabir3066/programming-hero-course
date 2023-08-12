//==== split =========//

// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split(" ");
// console.log(words);
// /*
// [ 'The','quick',brown',fox',jumps',over',the',lazy','dog.' ]
// */
// console.log(typeof words); // object
// console.log(words[1]); // quick

// const chars = str.split("");
// console.log(chars);
// console.log(chars[4]); //q

// const strCopy = str.split();
// console.log(strCopy); //[ 'The quick brown fox jumps over the lazy dog.' ]

// ================slice method==========//
//slice(indexStart)
// slice(indexStart, indexEnd)

// const str = "The quick brown fox jumps over the lazy dog.";

// console.log(str.slice(5)); // uick brown fox jumps over the lazy dog.

// console.log(str.slice(5, 8)); // uic

// ================substring method==========//
//substring(indexStart)
// substring(indexStart, indexEnd)
const str = "Mozilla";

console.log(str.substring(1, 3)); //oz
console.log(str.substring(2)); // zilla
