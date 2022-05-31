/**
 * Let us create a function that receives a string "abcbdbd",
 * and returns an array like:
["a", "a.b", "a.b.c", "a.b.c.b", "a.b.c.b.d", "a.b.c.b.d.b", ...]
 */

const str = 'abcbdbd';

function splitString(str) {
   const arr = str.split('');
   let tempArr = [];

   for (let i = 1; i < arr.length; i++) {
      let cutArray = arr.slice(0, i).join('.');
      tempArr.push(cutArray);
   }

   return tempArr;
}

console.log(splitString(str));
