// Given an array of integers nums which is sorted in ascending order,
//  and an integer target, write a function to search target in nums.
//   If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.


let search = function (nums, target) {
    let array = nums.sort(function (a, b) { return a - b });
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        if (target == array[middleIndex]) {
            return middleIndex
        }
        if (target < array[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else {
            firstIndex = middleIndex + 1;
        }
    }
    return -1
};

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1