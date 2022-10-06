/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let pointer1 = 0;
    let pointer2 = numbers.length - 1;
    while (pointer1 < pointer2) {
        let sum = numbers[pointer1] + numbers[pointer2];
        if (sum === target) {
            return [pointer1 + 1, pointer2 + 1];
        } else if (sum < target) {
            pointer1 +=1;
        } else {
            pointer2 -= 1;
        }
    }
    return [-1, -1]
};