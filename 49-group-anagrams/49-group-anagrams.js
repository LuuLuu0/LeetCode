/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var stringMap = {};
    
    for (let i = 0; i < strs.length; i++) {
        let sortedWord = strs[i].split('').sort().join('');
        
        if (!stringMap[sortedWord]) stringMap[sortedWord] = [];
        
        stringMap[sortedWord].push(strs[i]);
    }
    

    return Object.values(stringMap)
};