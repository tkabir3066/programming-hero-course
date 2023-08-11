let color = "pink";

/* if (color === "green") {
  console.log("You are my green friend");
} else if (color === "blue") {
  console.log("You are my blue friend");
} else if (color === "red") {
  console.log("You are my reddish friend");
} else if (color === "yellow") {
  console.log("You are my yellow friend");
} else if (color === "pink") {
  console.log("You are my pinkyy friend");
} else {
  console.log("You are my black friend");
} */

switch (color) {
  case "green":
    console.log("You are my green friend");
    break;
  case "blue":
    console.log("You are my blue friend");
    break;
  case "red":
    console.log("You are my red friend");
    break;
  case "yellow":
    console.log("You are my yellow friend");
    break;
  case "pink":
    console.log("You are my pinkyy friend"); //You are my pinkyy friend
    break;
  default:
    console.log("You are my black friend");
}
