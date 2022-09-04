/**
 * @param {number[]} nums
 * @return {number}
 */

// get the start of the numbers
// get the end of the numbers
// create something to track the numbers
// iterate through the nums array and then mark off the numbers that are seen
// return the missing numbers

var missingNumber = function(nums) {
    let length = nums.length + 1;
    let numSet = new Set();
    let numArray = [];
    
    for (let i = 0; i < length; i++) {
        numArray.push(i);
    }
    for (let j = 0; j < nums.length; j++) {
        numSet.add(nums[j]);
    }
    for (let x = 0; x < numArray.length; x++) {
        if (!numSet.has(numArray[x])) return numArray[x];
    }
};