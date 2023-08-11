/* function functionName(parameters){
    //function body

    return
}

//function call

var result = functionName(parameters value); */

function getAverage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const average = total / 3;

  return average;
}

const assignment1Marks = 55;
const assignment2Marks = 45;
const assignment3Marks = 35;
const result = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);

console.log("Average = ", result);
