// Take a small letter alphabet as a functuion peramitter and print whether it is VOWEL or CONSONANT.

const solution = (letter)=> {
    return letter == 'a' || letter == 'e' || letter == 'u' || 
    letter == 'o' || letter == "i" ? "VOWEL" : "CONSTANT"
  };
  
  
  console.log(solution('a')); // VOWEL
  console.log(solution('u')); // VOWEL
  console.log(solution('k')); // CONSONANT