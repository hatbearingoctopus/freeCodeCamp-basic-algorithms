// Check if a string (first argument) ends with the given target string (second argument)

function confirmEnding (str, target) {
  return str.slice(str.length - target.length) === target;
}

//Use slice to take the full length of the str and minus the full lengt of the target
//Then compare to see if it's equal to the target
