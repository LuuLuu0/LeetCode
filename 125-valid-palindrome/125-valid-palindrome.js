/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newString = s.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
    let left = 0;
    let right = newString.length - 1;
    
    while (left < right) {
        if (newString[left] !== newString[right]) return false;
        left += 1;
        right -= 1;
    }
    
    return true;
};