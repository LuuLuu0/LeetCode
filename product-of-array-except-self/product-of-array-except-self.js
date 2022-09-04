/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let answerArray = new Array(nums.length);
    
    answerArray[0] = 1;
    
    for (let i = 1; i < nums.length; i++) {
        answerArray[i] = nums[i - 1] * answerArray[i - 1];
    }
    
    let rightProduct = 1;
    
    for (let x = nums.length - 1; x >= 0; x--) {
        
        answerArray[x] = answerArray[x] * rightProduct;
        
        rightProduct *= nums[x];
    }
    
    return answerArray;
};