// Write a function that splits an array into groups the length of (size) and returns them as a two dimensional array.

function chunkArrayInGroups (arr, size) {
  let result = [];
  while (arr.length) {
    result.push(arr.splice(0, size));
   }
  return result;
  }
  
  //Set variable to store result.
  //Use while loop to look through the full length of (arr).
  //For each iteration splice out (size) chunk of elements and push them into result.
  //Return result
