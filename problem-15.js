// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
   // your code here
   if (s.length % 2 === 0) {
      let middleLength = Math.round(s.length / 2);
      return s.charAt(middleLength) + s.charAt(middleLength - 1);
   } else {
      let midLength = s.length / 2;
      return s.charAt(midLength);
   }
}

getMiddle('middle');
