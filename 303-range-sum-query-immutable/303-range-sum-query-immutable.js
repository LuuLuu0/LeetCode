/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [];
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        this.sums.push(currSum);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) {
        return this.sums[right];
    } else {
        return this.sums[right] - this.sums[left - 1];
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */