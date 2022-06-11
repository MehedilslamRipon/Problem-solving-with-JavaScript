let digits = [4, 3, 2, 1];

let plusOne = function (digits) {
   let result = [];

   // last element from digits[]
   let lastElement = digits.pop() + 1;

   // split lastElement and convert it to Number
   let getLastDigit = String(lastElement)
      .split('')
      .map((i) => Number(i));

   // check the last element is greater than 1 && last digit is 0
   if (String(lastElement) > 9 && getLastDigit[getLastDigit.length - 1] === 0) {
      result = digits.concat(getLastDigit);
   } else {
      result = digits.concat(getLastDigit);
   }

   // final Array
   return result;
};

console.log(plusOne(digits));
