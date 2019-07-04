// Return the provided string with the first letter of each word capitalized. Make sure the resot of the word is lowercase.

function titleCase(str) {
  let makeArray = str.toLowerCase().split('');
  let result = makeArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
   });
   return result.join('');
  }
  
  //Turn (str) into an array, make it all lowercase and split it on the gap.
  //Map over the array and use replace to remove the lowercase and add uppercase to the 0 index of each element.
  //Join and return the result.
