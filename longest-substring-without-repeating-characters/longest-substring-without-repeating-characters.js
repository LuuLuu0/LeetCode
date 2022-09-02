/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // iterate through the string 
    // have a current counter when there is a start of a new substring
    // keep track of the max length of the biggest substring
    // keep a map of the non-duplicate values
    
    // "abcabcbb"
    
    let seenMap = new Map();
    let currentCount = 0;
    let maxCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (seenMap.has(s[i])) currentCount = Math.max(seenMap.get(s[i]) + 1, currentCount);
        seenMap.set(s[i], i);
        maxCount = Math.max(i - currentCount + 1, maxCount);
    }
    
    return maxCount;
};