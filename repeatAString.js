// Repeat a give string (str) for (num) times. Return an empty string if (num) is not a positive integer

function repeatStringNumTimes (str, num) {
  if (num < 0) {
    return '';
  if (num === 1) 
    return str;
  else 
    return str + repeatStringNumTimes(str, num - 1);
  }
}

//If num is less than 0 return an empty string
//If num is 1, return 1 str
//else add the str to the function call and decrement by 1 each time
