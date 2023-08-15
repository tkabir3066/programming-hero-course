// remove duplicate items from an array

const names = [
  "abul",
  "babul",
  "sabul",
  "abul",
  "kabul",
  "jabul",
  "sabul",
  "abul",
  "mabul",
  "sabul",
];

//// approach-1
/* function removeDuplicate(names) {
  let unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }

  return unique;
} */

// approach-2
function removeDuplicate(names) {
  let unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.indexOf(name) === -1) {
      unique.push(name);
    }
  }

  return unique;
}

const uniqueName = removeDuplicate(names);

console.log(uniqueName); //[ 'abul', 'babul', 'sabul', 'kabul', 'jabul', 'mabul' ]
