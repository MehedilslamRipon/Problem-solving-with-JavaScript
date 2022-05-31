// check the number is Palindrome or not
function isPalindrome(num) {
   const temp = num.toString().split('').reverse().join('') * 1;
   return (result = num === parseInt(temp) ? true : false);
}

console.log(isPalindrome(121));
console.log(isPalindrome(320));
