// includes

const str =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

/* const isExist1 = str.includes("readable");
console.log(isExist1); // true

// const isExist2 = str.includes("Readable");
// console.log(isExist2); // false

let searchStr = "Readable";

searchStr = searchStr.toLowerCase();

const isExist2 = str.toLowerCase().includes(searchStr);
console.log(isExist2); // true
const isExist3 = str.includes("readability");
console.log(isExist3); // false */

//=== indexOf() ====//

const aboutMe = "I am a professional developer";
console.log(aboutMe.indexOf("dev")); //20
console.log(aboutMe.indexOf("devi")); //-1
/* 
if (aboutMe.indexOf("developer") !== -1) {
  console.log("Exists inside the string"); //Exists inside the string

} else {
  console.log("Can not find it");
} */

if (aboutMe.indexOf("mangooo") !== -1) {
  console.log("Exists inside the string");
} else {
  console.log("Can not find it"); //Can not find it
}

// =========== startsWith =============//
//startsWith(searchString)
// startsWith(searchString, position)

let str2 = "Saturday night plans";
str2 = str2.toLowerCase();
console.log(str2.startsWith("sat")); // true
console.log(str2.startsWith("sat", 0));

//========= endsWith()====//

console.log(str2.endsWith("plans")); // true
console.log(str2.endsWith("plan")); // false

const filesName = "bioData.pdf";
const myPicName = "tutul.png";

console.log(filesName.endsWith(".pdf")); // true
