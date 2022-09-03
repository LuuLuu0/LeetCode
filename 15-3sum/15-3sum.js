/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// we need to create a result array to store the numbers
// iterate through the initial numbers i
// then we need to iterate through the left and right using pointers
// need to also skip through duplicates

var threeSum = function(nums) {
    let resultArr = [];

    // sort the number array
    nums = nums.sort((a,b) => a-b);
    
    // create a left and right pointer
    let left = 0;
    let right = nums.length - 1;
    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // set the left to the next index of i and the right to the end
        left = i + 1;
        right = nums.length - 1;
        let sum = 0;
        
        // skip the duplicate number
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        //iterate through the second portion of the array
        while (left < right) {
            // calculate the sum
            sum = nums[i] + nums[left] + nums[right];
            // we have found the target sum
            if (sum === 0) {
                resultArr.push([nums[i], nums[left], nums[right]]);
                
                left++
                right--;
                
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right --;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return resultArr;
};