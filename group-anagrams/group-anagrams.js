/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let stringMap = {};
    
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');
        
        if (!stringMap[sorted]) stringMap[sorted] = [];
        
        stringMap[sorted].push(strs[i]);
    }
    
    return Object.values(stringMap);
};