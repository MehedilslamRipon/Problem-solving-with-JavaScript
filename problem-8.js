const num = 3849;

function reverseGivenInteger(num) {
   return num.toString().split('').reverse().join('') * 1;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
