// problem-1

//=========== approach-1 ===============//

// function deliciousCake(m, n) {
//   if (m > n) {
//     return "Jim will get this cake";
//   } else {
//     return "Dela will get this Cake";
//   }
// }

// const result1 = deliciousCake(84, 75);
// console.log(result1); //Jim will get this cake

// const result2 = deliciousCake(69, 97);
// console.log(result2); //Dela will get this Cake

//========== approach-2 =====================//

function deliciousCake(m, n) {
  const max = Math.max(m, n);
  console.log(max);
  if (max) {
    return "Jim will get this cake";
  } else {
    return "Dela will get this Cake";
  }
}

const result1 = deliciousCake(84, 75);
console.log(result1); //Jim will get this cake

const result2 = deliciousCake(69, 97);
console.log(result2); //Dela will get this Cake
