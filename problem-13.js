// How to check if an object is empty or not in javaScript?

// isEmpty({}) returns true
// isEmpty({key: 1}) returns false

const obj = { key: 1 };

function isEmpty(obj) {
   // write your solution here

   return Object.keys(obj).length === 0;
}

console.log(`is empty object: ${isEmpty(obj)}`);
