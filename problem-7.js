const str = 'JavaScript is awesome';

function reverseAString(str) {
   return str.split('').reverse().join('');
}

console.log(`Reversed string is: ${reverseAString(str)}`);
