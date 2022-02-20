// Find the largest number
const a = 50;
const b = 40;
const c = 70;

function findTheBiggestNumber(a, b, c) {
   if (a > b && a > c) {
      return 'the answer is A';
   } else if (b > a && b > c) {
      return 'the answer is B';
   } else {
      return 'the answer is C';
   }
}

const result = findTheBiggestNumber(a, b, c);

console.log(result);
