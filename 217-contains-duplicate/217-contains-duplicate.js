/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seenSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seenSet.has(nums[i])) return true;
        seenSet.add(nums[i]);
    }
    return false;
};