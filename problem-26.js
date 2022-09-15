// linear search
let arr = [2, 3, 5, 6, 12, 19, 20];

function linearSearch(arr) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 19) {
         return i;
      }
   }

   return -1;
}

let result = linearSearch(arr);

console.log(result);
