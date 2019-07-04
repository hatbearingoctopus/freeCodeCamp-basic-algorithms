// Use slice/splice to copy each element of the first array into the second, in order. Begin inserting elements at index n of the second array. Return the resulting array.

function frankenSplice (arr1, arr2, n) {
  let newArray = arr2.slice();
  
  for (let i = 0; i < arr1.length; i ++) {
    newArray.splice (n, 0, arr[i]);
    n++;
    }
  return newArray;
 }
 
 //Use slice to create replica of arr2.
 //Iterate through arr1 and use splice to insert the item into index n of the newArray.
 //Increment the n by 1 and return
