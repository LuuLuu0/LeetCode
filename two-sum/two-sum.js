/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let diffMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        
        if (diff in diffMap) return [diffMap[diff], i];
        
        diffMap[nums[i]] = i;
    }
};