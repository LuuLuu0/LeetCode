/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// create a dynamic sliding window to find the minimum window substring

var minWindow = function(s, t) {
    // if the length of S is smaller than T then we return empty string
    if (s.length < t.length) return "";
    // we create a map of the letters of T to track what has been seen
    const letterMap = {};
    
    // initializing the map with the letters as the key and the count as the value
    for (let letter of t) {
        letterMap[letter] = (letterMap[letter] || 0) + 1;
    }
    // initializing the left pointer and right pointer of the window
    let left = 0;
    let right = 0;
    // the length of the letters in the letterMap we created
    let neededLength = Object.keys(letterMap).length;
    let resultString = '';
    
    while (right < s.length) {
        const rightChar = s[right];
        letterMap[rightChar]--;
        if (letterMap[rightChar] === 0) neededLength--;
        
        while(neededLength === 0) {
            if (!resultString || resultString.length > right - left + 1) {
                resultString = s.slice(left, right + 1);
            }
            
            const leftChar = s[left];
            
            if (letterMap[leftChar] === 0) {
                neededLength++;
            }
            
            letterMap[leftChar]++;
            left++;
        }
        right++;
    }
    return resultString;
};