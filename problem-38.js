// Say you are given the following array of integer data type. 
// Now write a program which will find the biggest integer and print the integer 


const solution = (array) => {
    let array1 = array.sort(function(a,b){return a - b})    
    let biggest = array1[array1.length -1];
    return biggest;
  };
  
  console.log(solution([10, 20, 30, 40, 50])); // 50 
  console.log(solution([5, 10, 15, 20, 25, 30])); // 30 
  console.log(solution([44, 665, 221, -434, 643, 123])); // 665 
  console.log(solution([-34, 64, -1, 0, 45])); // 64 