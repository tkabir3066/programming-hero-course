const places = document.getElementsByClassName("important-places");
console.log(places);

const fruits = document.getElementById("fruits-title");
fruits.innerText = "Fruits title chang by JS";
for (let place of places) {
  console.log(place.innerText);
}

const summer = document.getElementById("summer");
console.log(summer); //null     // karon "summer" naam e kono id nei

const fruit = document.getElementsByClassName("fruit-title");
console.log(fruit); // HTMLCollection []  // fruit-title bole kono class naam nei
