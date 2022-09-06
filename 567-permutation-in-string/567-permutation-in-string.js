/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let windowStart = 0;
    let stringMap = {};
    let matchCount = 0;
    
    for (let letter of s1) {
        if (!(letter in stringMap)) stringMap[letter] = 0;
        stringMap[letter] += 1;
    }
    
    for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
        let leftLetter = s2[windowEnd];
        
        if (leftLetter in stringMap) {
            stringMap[leftLetter] -= 1;
            if (stringMap[leftLetter] === 0) matchCount += 1;
        }
        if (matchCount === Object.keys(stringMap).length) return true;
        
        if (windowEnd >= s1.length - 1) {
            let rightLetter = s2[windowStart];
            windowStart += 1;
            
            if (rightLetter in stringMap) {
                if (stringMap[rightLetter] === 0) {
                    matchCount -= 1;
                }
                stringMap[rightLetter] += 1;
            }
        }
    }
    return false;
};