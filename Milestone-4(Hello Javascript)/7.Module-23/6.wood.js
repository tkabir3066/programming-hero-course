//Use add and multiplication to calculate wood requirements

/* 
fixed: per item wood requirements
1.chair -> 3 cft (cubic foot)
2.chair -> 10 cft (cubic foot)
3.bed -> 50 cft (cubic foot)

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;

  return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log("Total Wood = ", totalWood);
