/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.index = k;
    this.numArray = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.numArray.push(val);
    const sortedNumArray = this.numArray.sort((a, b) => a - b);
    return sortedNumArray[sortedNumArray.length - this.index];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */