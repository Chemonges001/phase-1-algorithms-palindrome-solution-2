function isPalindrome(word) {
  // Write your algorithm here
  for (n = 0; n < word.length/2; n++ ){

    let o = word.length -1-n;

    if (word[n] === word[o]){
      return true;
    }
    return false 
  }
  
}

/* 
  Add your pseudocode here
*/
// iterate from the beginning to the middle of the string and compare the letters of the forst half to the letters in the second half

// if the letters from the end equals to the letters from the beginning, return true
// else, return false
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
