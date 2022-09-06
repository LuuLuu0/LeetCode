/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const length = nums.length;
    let resultArr = Array(length).fill(0);
    let leftPointer = 0;
    let rightPointer = length - 1;
    let endIdx = length - 1;
    
    while (leftPointer <= rightPointer) {
        const leftSquare = nums[leftPointer] * nums[leftPointer]
        const rightSquare = nums[rightPointer] * nums[rightPointer]
        
        if (leftSquare > rightSquare) {
            resultArr[endIdx] = leftSquare;
            leftPointer += 1;
        } else {
            resultArr[endIdx] = rightSquare;
            rightPointer -= 1;
        }
        endIdx -= 1;
    }
    return resultArr;
};