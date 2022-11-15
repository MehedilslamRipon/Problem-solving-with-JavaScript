// Take an integeras input and print it's multiplication 
// table up to 10. if user gives 5 your output shouold look like the following example.

// 5 * 1 = 5 5 * 2 = 10 5 * 3 = 15 5 * 10 = 50

const solution = (integer)=> {
    let sum = ''
      for (let i = 1 ; i <= 10 ; i++){
           sum+=` ${integer} * ${i} = ${integer * i} `
      }
  
    return sum;
  };
  
  
  
  console.log(solution(5))// Multiplication Table of 5
  console.log(solution(6))// Multiplication Table of 6
  console.log(solution(7))// Multiplication Table of 7