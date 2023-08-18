// querySelectorAll

// const someLi = document.querySelectorAll(".fruits-container li");
// console.log(someLi);

// for (let li of someLi) {
//   console.log(li);
//   console.log(li.innerText);
// }

//==== first li =====//

// const firstLi = document.querySelector(".fruits-container li");
// console.log(firstLi);
const firstLi = document.querySelectorAll(".fruits-container li")[0];
console.log(firstLi);
