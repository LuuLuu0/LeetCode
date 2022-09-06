/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let windowStart = 0;
    let windowEnd = s1.length;
    const sortedPat = s1.split('').sort().join('');
    
    while(windowEnd <= s2.length) {
        let currentString = s2.substring(windowStart, windowEnd);
        const sortedString = currentString.split('').sort().join('');

        if (sortedPat === sortedString) return true;
        windowStart += 1;
        windowEnd += 1;
    }
    
    return false;
};