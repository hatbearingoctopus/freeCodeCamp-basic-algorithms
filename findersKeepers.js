// Create a function that looks through an array and returns the first element in the array that passes a truth test (func). If no element passes the test, return undefined.

function findElement (arr, func) {
  let num = 0;
  
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
     if (func(num)) {
      return num; 
      }
    }
    return undefined;
}

//Look through array with a for loop
//Set num to each index in the array
//Pre-defined function checks each num, if it's tru we return that num
//If none of the numbers pass the functions test, return undefined.
