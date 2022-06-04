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
