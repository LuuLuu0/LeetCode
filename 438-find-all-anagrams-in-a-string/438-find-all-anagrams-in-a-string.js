/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let windowStart = 0;
    let matchCount = 0;
    let patternMap = {};
    let result = [];
    
    for (let letter of p) {
        if (!(letter in patternMap)) patternMap[letter] = 0;
        patternMap[letter] += 1;
    }
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const leftLet = s[windowEnd];
        if (leftLet in patternMap) {
            patternMap[leftLet] -= 1;
            if (patternMap[leftLet] === 0) {
                matchCount += 1;
            }
        }
        if (matchCount === Object.keys(patternMap).length) result.push(windowStart);
        
        if (windowEnd >= p.length - 1) {
            const rightLet = s[windowStart];
            windowStart += 1;
            if (rightLet in patternMap) {
                if (patternMap[rightLet] === 0) {
                    matchCount -= 1;
                }
                patternMap[rightLet] += 1;
            }
        }
    }
    return result;
};