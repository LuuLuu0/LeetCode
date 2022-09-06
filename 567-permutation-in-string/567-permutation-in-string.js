/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let windowStart = 0;
    let charMap = {};
    let matchedChars = 0;
    
    for (let letter of s1) {
        if (!(letter in charMap)) charMap[letter] = 0;
        charMap[letter] += 1;
    }
    
    for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
        const currLetter = s2[windowEnd];

        if (currLetter in charMap) {
            charMap[currLetter] -= 1;
            if (charMap[currLetter] === 0) {
                matchedChars += 1;
            }
        }
        
        if (matchedChars === Object.keys(charMap).length) return true;
        
        if (windowEnd >= s1.length - 1) {
            let prevChar = s2[windowStart];
            windowStart += 1;
            
            if (prevChar in charMap) {
                if (charMap[prevChar] === 0) {
                    matchedChars -= 1;
                }
                charMap[prevChar] += 1;
            }
        }
    }
    
    return false;
};