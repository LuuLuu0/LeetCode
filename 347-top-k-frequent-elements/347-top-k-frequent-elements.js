/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numberCountMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numberCountMap[nums[i]]) numberCountMap[nums[i]] = 1;
        else numberCountMap[nums[i]] += 1;
    }
    let entries = Object.entries(numberCountMap).sort((a, b) => b[1] - a[1]);
    
    let resultArr = [];
    for (let x = 0; x < k; x++) {
        resultArr.push(entries[x][0]);
    }
    return resultArr;
};