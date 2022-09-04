/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap = {};
    
    for (let letter of s) {
        charMap[letter] = (charMap[letter] || 0) + 1;
    }
  
    for (let singleLet in charMap) {
        if (charMap[singleLet] === 1) {
            return s.indexOf(singleLet);
        }
    }
    
    return -1;
};