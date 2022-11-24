// Sort an Array You must solve the problem without using any built-in functions
let sortArray = function(nums) {
    let swapp
    do {
       swapp = false
       for (let i = 0; i < nums.length; i++) {
           if (nums[i] > nums[i + 1]) {
               let temp = nums[i];
               nums[i] = nums[i + 1];
               nums[i + 1] = temp;
               swapp = true
           }
       }
   } while (swapp);
   return nums 
};


console.log(sortArray([5,9,2,-1,3,-126])) // [-126 , -1 , 2 ,3 , 5 , 9]