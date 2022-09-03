/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closestVal = Infinity;
    let left, right;
    nums = nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        left = i + 1;
        right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (Math.abs(sum - target) < Math.abs(closestVal - target)) {
                closestVal = sum;
            }
            if (sum > target) right--;
            else left++;
            
        }
    }

    return closestVal;
};