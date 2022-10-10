/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = [];
    let queue = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        if (queue[0] === i - k) {
            queue.shift();
        }
        queue.push(i);
        if (i >= k - 1) {
            result.push(nums[queue[0]])
        }
    }
    
    return result;
};