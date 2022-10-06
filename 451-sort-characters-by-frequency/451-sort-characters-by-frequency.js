/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let charMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!charMap[s[i]]) charMap[s[i]] = 0;
        charMap[s[i]] += 1;
    }
    const sortedMap = Object.entries(charMap).sort((a, b) => b[1] - a[1]);
    let stringResult = '';
    console.log(sortedMap);
    for (let x = 0; x < sortedMap.length; x++) {
        for (let j = 0; j < sortedMap[x][1]; j++) {
            stringResult += sortedMap[x][0];
        }
    }

    return stringResult
};