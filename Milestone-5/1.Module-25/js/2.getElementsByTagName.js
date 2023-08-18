// Traversing DOM

const liCollection = document.getElementsByTagName("li");
// console.log(liCollection); //HTMLCollection(4) [li, li, li, li]

for (let li of liCollection) {
  //   console.log(li);
}

const allHeadings = document.getElementsByTagName("h1");
console.log(allHeadings);
