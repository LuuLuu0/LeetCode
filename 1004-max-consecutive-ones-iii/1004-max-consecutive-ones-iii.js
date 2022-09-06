/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxLength = 0;
    let windowStart = 0;
    let mostZeroCount = 0;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        let currentVal = nums[windowEnd];
        if (currentVal === 0) {
            mostZeroCount += 1;
        }
        
        if (mostZeroCount > k) {
            if (nums[windowStart] === 0) {
                mostZeroCount -= 1;
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
};