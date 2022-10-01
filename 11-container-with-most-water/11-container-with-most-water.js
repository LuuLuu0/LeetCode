/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxAreaCount = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let smallestHeight = Math.min(height[left], height[right]);
        let width = right - left;
        let currentAreaCount = smallestHeight * width;
        maxAreaCount = Math.max(currentAreaCount, maxAreaCount);
        
        if (height[left] <= height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    
    return maxAreaCount;
};