/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//     let resultMap = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         let difference = target - nums[i];
        
//         if (resultMap.has(difference)) {
//             return [resultMap.get(difference), i];
//         }
        
//         resultMap.set(nums[i], i);
//     }
//     return [];
    let pointer1 = 0;
    let pointer2 = 1;
    while (pointer1 < nums.length) {
        let sum = nums[pointer1] + nums[pointer2];
        if (sum === target) {
            return [pointer1, pointer2];
        } else if (pointer2 === nums.length - 1) {
            pointer1 += 1;
            pointer2 = pointer1 + 1;
        } else {
            pointer2 += 1;
        }
    }
    return [-1, -1]
};