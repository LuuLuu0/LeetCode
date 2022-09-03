/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // return s.split('').sort().join('') === t.split('').sort().join('');
    
    let charMap = {};
    if (s.length !== t.length) return false;
    
    for (let chara of s) {
        if (!charMap[chara]) charMap[chara] = 0;
        charMap[chara] += 1;
    }
    for (let chara of t) {
        if (!charMap[chara]) return false;
        charMap[chara] -= 1;
    }
    
    return true;
};