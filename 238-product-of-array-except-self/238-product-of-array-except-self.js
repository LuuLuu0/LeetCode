/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answerArray = new Array(nums.length);
    const leftArrProducts = new Array(nums.length);
    const rightArrProducts = new Array(nums.length);
    leftArrProducts[0] = 1;
    rightArrProducts[nums.length - 1] = 1;
    
    for (let i = 1; i < nums.length; i++) {
        leftArrProducts[i] = nums[i - 1] * leftArrProducts[i - 1];
    }
    
    for (let x = nums.length - 2; x >= 0; x--) {
        rightArrProducts[x] = nums[x + 1] * rightArrProducts[x + 1];
    }
    

    for (let j = 0; j < answerArray.length; j++) {
        answerArray[j] = leftArrProducts[j] * rightArrProducts[j];
    }
    
    return answerArray;
};