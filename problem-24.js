// problem details
/* You crashed seeing a girl in the shopping mall. You asked for the girl's contact number at one point in the conversation. But the girl was very clever. Without giving her the whole number, she gave you the first nine digits and told you to think out the other two numbers.
Now you need to write a program that will find the last two digits of the contact number.
* There is a secret number that will use as a mobile operator network. But pretend like you don't know the secret number. ex: 54
* You have to use a loop instead of trying the phone number, again and again, to connect the call. */

// the secret number
const secretNum = 54;

function findTwoSecretNum(tryNum) {
   let result;

   for (let i = 0; i <= 99; i++) {
      if (result) {
         break;
      }
      let singleToDouble = `${i}`.length === 1 ? `0${i}` : i;
      result =
         ('' + tryNum + singleToDouble).slice(-2) * 1 === secretNum
            ? `Congrats! Your expected number is: ${
                 '0' + tryNum + singleToDouble
              }`
            : false;
   }

   return result;
}

console.log(findTwoSecretNum(017979892));
