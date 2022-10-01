/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // create a map to store element as well as their frequency count
    // convert the map entry and sort it so that we can have the greatest counts in the front
    // we can splice the array from 0 - k -1;
    const numberCountMap = {};
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
        if (!numberCountMap[nums[i]]) numberCountMap[nums[i]] = 0;
        numberCountMap[nums[i]] += 1;
    }
    const numberCountArray = Object.entries(numberCountMap)
    numberCountArray.sort((a, b) => b[1] - a[1]);
    const resultArr = [];
    let counter = 0;
    while (counter < k) {
        resultArr.push(numberCountArray[counter][0]);
        counter++;
    }
    return resultArr;
};