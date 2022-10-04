/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// first off we need to sort the array into increasing order 
// then we just return the length - k of the sorted array

var findKthLargest = function(nums, k) {
    const sortedArray = nums.sort((a, b) => a - b);
    const kthLargestIndex = nums.length - k
    
    return sortedArray[kthLargestIndex];
};