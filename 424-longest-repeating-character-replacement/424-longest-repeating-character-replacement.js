/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let charMap = {};
    let windowStart = 0;
    let maxLength = 0;
    let mostRepeatedCharCount = 0;
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const currLetter = s[windowEnd];
        if (!(charMap[currLetter])) charMap[currLetter] = 0;
        charMap[currLetter] += 1;
        mostRepeatedCharCount = Math.max(mostRepeatedCharCount, charMap[currLetter]);
        if (windowEnd - windowStart + 1 - mostRepeatedCharCount > k) {
            const prevLetter = s[windowStart];
            charMap[prevLetter] -= 1;
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength
};