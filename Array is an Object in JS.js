// Prove that Array is also an Object in JavaScript
// Method -1
let arr = [];
console.log(typeof arr);

// Method -2
let arr2 = [];
if (Array.isArray(arr2)) {
   console.log(`Array is an Object in JavaScript`);
}
