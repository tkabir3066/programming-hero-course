// problem-4
/* 
function maxInArray(heights) {
  let tallest = heights[0];
  for (let i = 1; i < heights.length; i++) {
    const height = heights[i];

    if (tallest < height) {
      tallest = height;
    }
  }

  return tallest;
}

const heights = [167, 190, 120, 165, 137];
const result = maxInArray(heights); //190

console.log(result); //190
 */

function minInArray(heights) {
  let smallest = heights[0];
  for (let i = 1; i < heights.length; i++) {
    const height = heights[i];

    if (smallest > height) {
      smallest = height;
    }
  }

  return smallest;
}

const heights = [167, 190, 120, 165, 137];
const result = minInArray(heights); //190

console.log(result); //120
