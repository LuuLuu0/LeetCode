/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let resultMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        
        if (resultMap.has(difference)) {
            return [resultMap.get(difference), i];
        }
        
        resultMap.set(nums[i], i);
    }
    return [];

};