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
    let arrayNums = [];
    
    for (let i = 0; i < length; i++) {
        arrayNums.push(i);
    }
    
    for (let j = 0; j < nums.length; j++) {
        let index = arrayNums.indexOf(nums[j]);
        if (index > -1) {
            arrayNums.splice(index, 1);
        }
    }
    
    return arrayNums[0];
};