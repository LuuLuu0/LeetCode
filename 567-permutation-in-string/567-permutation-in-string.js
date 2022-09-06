/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let windowStart = 0;
    let windowEnd = s1.length;
    let patternMap = rebuildMap(s1);
    
    console.log(patternMap)
    while(windowEnd <= s2.length) {
        let currentString = s2.substring(windowStart, windowEnd);
        
        for (let letter of currentString) {
            patternMap[letter] -= 1;
            if (patternMap[letter] === 0) {
                delete patternMap[letter];
            }
        }
        
        if (Object.keys(patternMap).length === 0) {
            return true;
        }
        
        windowStart += 1;
        windowEnd += 1;
        patternMap = rebuildMap(s1);
    }
    
    return false;
};

const rebuildMap = (string) => {
    let patternMap = {};
    
    for (let i = 0; i < string.length; i++) {
        if (!(string[i] in patternMap)) patternMap[string[i]] = 0;
        patternMap[string[i]] += 1;
    }
    
    return patternMap;
}