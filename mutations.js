// Return true if the string in the first element of the array contains all of the letters of the string in the second elements of the array.

function mutation (arr) {
  return arr[1].toLowerCase().split('').every(function (letter) {
    return arr[0].toLowerCase().indexOf(letter)! = -1;
   });
  }
  
  //Grab the second string (arr[1]), change it to lowercase and turn into an array with split.
  //Use every method to compare. The indexOf method is used on the first string. indexOf gives -1 if the current letter is missing.
  //!=-1 is used to chack that -1 is not the case.  
  
