// JavaScript allows you to deep copy an object by converting it into string and then back into object.

let obj = {
   name: 'mehedi',
   address: 'dinajpur',
   mail: 'mehediislamripon@gmail.com',
};

const deepCopy = (obj) => {
   return JSON.parse(JSON.stringify(obj));
};

console.log(deepCopy(obj));
