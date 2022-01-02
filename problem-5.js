let words = "aeiou";

let newWords = "";

function isVowelOrNot(words) {
   for (let word of words) {
      if (
         word === "a" ||
         word === "e" ||
         word === "i" ||
         word === "o" ||
         word === "u"
      ) {
         newWords = newWords + word;
      }
   }
   if (newWords === words) {
      return true;
   } else {
      return false;
   }
}

let result = isVowelOrNot(words);
console.log(result);
