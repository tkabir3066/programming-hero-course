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

function removeDuplicate(names) {
  let unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }

  return unique;
}

const uniqueName = removeDuplicate(names);

console.log(uniqueName); //[ 'abul', 'babul', 'sabul', 'kabul', 'jabul', 'mabul' ]
