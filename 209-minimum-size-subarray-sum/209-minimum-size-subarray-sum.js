/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let windowStart = 0;
    let windowSum = 0;
    let minLength = Infinity;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];
        
        while (windowSum >= target) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }
    
    if (minLength === Infinity) {
        return 0;
    }
    
    return minLength;
};

// this is a space complexity of O(1) and a time complexity of O(N + M)