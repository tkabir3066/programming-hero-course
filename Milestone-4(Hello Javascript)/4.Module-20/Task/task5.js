// You are in hurry to go to your school on time.But when you are crossing the road , the traffic signal is red coloured. In this situation , if you try to cross the road, you may be in danger. If you notice a yellow coloured traffic signal , you should stop.If you notice a green coloured traffic signal, you should cross the road. So, write js code, where there is a variable called signal. Its value can be green, yellow, red and we will get different activities as output depending on the variable. So, hurry up.

let signal = "green";

// if (signal === "red") {
//   console.log("if you try to cross the road, you may be in danger");
// } else if (signal === "yellow") {
//   console.log(" you should stop to cross the road");
// } else {
//   console.log("you should cross the road");
// }

switch (signal) {
  case "red":
    console.log("if you try to cross the road, you may be in danger");
    break;
  case "yellow":
    console.log(" you should stop to cross the road");
    break;
  default:
    console.log("you should cross the road");
}
