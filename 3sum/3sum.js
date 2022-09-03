/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let resultArr = [];
    nums = nums.sort((a,b) => a-b);
    
    let left, right;
    
    for (let i = 0; i < nums.length; i++) {
        left = i + 1;
        right = nums.length - 1;
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                resultArr.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return resultArr;
};