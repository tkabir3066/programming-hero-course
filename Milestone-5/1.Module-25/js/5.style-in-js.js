const sections = document.querySelectorAll("section");
console.log(sections); //NodeList(3) [section, section.fruits-container, section]

// html collection e amra forEach loop chalate parbona but nodelist e parbo

sections.forEach((section) => {
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = " 10px";
  section.style.borderRadius = "1rem";
  section.style.paddingLeft = "1rem";
  section.style.backgroundColor = "lightgray";
});

const placesContainer = document.querySelector("#places-container");
// console.log(placesContainer);

// placesContainer.style.backgroundColor = "yellow";

placesContainer.classList.add("text-center");

const awesomeSection = document.querySelector(".awesome");
awesomeSection.classList.remove("awesome");
