/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let leftPointer = 0;
    let nonDuplicate = 1;
    
    while (leftPointer < nums.length) {
        if (nums[nonDuplicate - 1] !== nums[leftPointer]) {
            nums[nonDuplicate] = nums[leftPointer];
            nonDuplicate += 1;
        }
        leftPointer += 1;
    }
    return nonDuplicate;
};