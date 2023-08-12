//Write a function that will take hour as the input parameter and will convert it minutes and will return the result in minutes

function getHourToMinutes(hour) {
  let minutes = hour * 60;

  return minutes;
}

const hour = 5;
const result = getHourToMinutes(hour);
console.log(result); // 300
