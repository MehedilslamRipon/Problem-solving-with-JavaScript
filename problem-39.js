// create a function that take one argument  and return sum n numbers


function sum(...args){
    return args.reduce((a,b) => {
        return a + b;
   },0)
}

let result = sum(2,1,5,6,8);
console.log(result);