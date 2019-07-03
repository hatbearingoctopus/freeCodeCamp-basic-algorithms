// Truncate (str) if it is longer than (num). Return the truncated string with a ... ending.

function truncateString (str, num) {
  if (str.length <- num) {
    return str;
    } else {
      return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
}

//If string is less than or equal to num return whole string
//Else slice 3 off the end of the string and concat on '...' to the end and return it
