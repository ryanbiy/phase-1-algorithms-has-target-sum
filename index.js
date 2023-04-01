function hasTargetSum(array, target) {
  //store the differences between the target and array elements
  const differences = {};

  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Get the current element
    const num = array[i];

    // Check if the current element's difference with the target has been found
    if (differences[num]) {
      //return true since we found a pair that adds up to the target
      return true;
    }

    // Add difference between target and  current element to the differences object
    differences[target - num] = true;
  }

  // If we complete the loop without finding a pair, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
