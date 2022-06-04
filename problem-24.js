// const inCompleteNum = '017979892';
const secretNum = 54;

function findTwoSecretNum(tryNum) {
   if (tryNum === '') {
      return 'Please enter a valid number to try!';
   }

   for (let i = 0; i <= 99; i++) {
      console.log('' + tryNum + i);
   }
}

findTwoSecretNum('017979892');
