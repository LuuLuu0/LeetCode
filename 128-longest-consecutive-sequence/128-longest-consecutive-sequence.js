/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numberSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        numberSet.add(nums[i]);
    }
    let longestStreak = 0;
    for (let num of numberSet) {
        if (!numberSet.has(num - 1)) {
            let currentStreak = 1;
            while (numberSet.has(num += 1)) {
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};