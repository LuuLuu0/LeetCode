/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    if (nums.length === 1 && nums[leftIdx] === target) {
        return [0, 0];
    }
    while (leftIdx <= rightIdx) {
        if (nums[leftIdx] === target && nums[rightIdx] === target) {
            return [leftIdx, rightIdx];
        } else if (nums[leftIdx] === target) {
            rightIdx -= 1;
        } else if (nums[rightIdx] === target) {
            leftIdx += 1;
        } else {
            leftIdx += 1;
            rightIdx -= 1;
        }
    }
    return [-1, -1];
};