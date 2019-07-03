// Return an array consisting of the largest number from each sub-array. You can iterate through an array with a for loop and access each member with array syntax arr[i].

function largestOfFour (arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return (current > prev) ? current : prev;
      });
     });
    }
    
    //use map to map all items to a new array and return this array as the final result
    //within each inner array, reduce its contents down to a single value
    //The callback function takes previous value and current value and compares the two
    //If the current value is higher than the previous value for comparison with the next item with the array or returns it to the map callback if it's the last item. 
