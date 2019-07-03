// Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWordLength (str) {
  let wordLength = str.split('');
  let maxWordLength = 0;
  
  for (let i = 0; i < wordLength.length; i ++) {
    if(wordLength[i].length > maxWordLength) {
      maxWordLength = wordLength[i].length 
      }
        }
          return maxWordLength;
    }
    
    
    //split string into an array on the space
    //declare variable to store the longest word
    //iterate through each word
    //if the current iteration is longer than maxWordLength than make maxWordLength = that iteration
    //return maxWordLength
