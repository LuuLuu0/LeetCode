/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let windowStart = 0;
    let charMap = {};
    let maxLength = -Infinity;
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        
        if (!charMap[rightChar]) {
            charMap[rightChar] = 0;
        }
        charMap[rightChar] += 1;
        
        while (Object.keys(charMap).length > k) {
            let leftChar = s[windowStart];
            charMap[leftChar] -= 1;
            
            if (charMap[leftChar] === 0) {
                delete charMap[leftChar];
            }
            windowStart += 1;
        }
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
};