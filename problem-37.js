// Take an array of integer data type of size 10 And pritn the sum of those 10 integers.

const solution = (array) => {
      let sum =  array.reduce((acc,curr) => { return acc + curr},0)
      return sum;
    
};
  
  console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
  console.log(solution([22, 11, 55, 66, 77, 88, 99, 44, 33, 10 ])); // 505
  console.log(solution([12, 12, 65, 36, 87, 18, 79, 14, 73, 70 ])); // 466