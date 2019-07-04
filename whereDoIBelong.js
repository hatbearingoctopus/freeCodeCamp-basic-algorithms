// Return the lowest index at which a value (num) should be inserted into an array once it has been sorted. The returned value should be a number. 

function getIndexToInsert (arr, num) {
  arr.sort (a, b) {
    return a - b;
  });
  
let i = 0;
while (num > arr[i]) {
  i++;
 }
 return i;
 }
 
 //Sort the array from lowest to highest.
 //Iterate through arr while checking if num is larger.
 //The while loop stops when num is no longer larger than i.
 //Return the last element checked. 
