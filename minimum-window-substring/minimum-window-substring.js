/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // first edge case is if s is smaller than t
    if (s.length < t.length) return '';
    
    // create a map to track all the letters in t, if it's found in s
    // create a left pointer and a right pointer for the sliding window
    // iterate through the window on s, to find the substring
    // after we have found the substring, we then need to find the smallest size 
    
    let letterMap = {};
    for (let letter of t) {
        letterMap[letter] = (letterMap[letter] || 0) + 1;
    }
    let left = 0;
    let right = 0;
    let totalLength = Object.keys(letterMap).length;
    let resultString = "";
    
    while (right < s.length) {
        const rightLetter = s[right];
        letterMap[rightLetter]--;
        
        if (letterMap[rightLetter] === 0) totalLength--;
        
        while (totalLength === 0) {
            const leftLetter = s[left];
            // console.log(resultString);
            // console.log(resultString.length)
            // console.log("left ", left, "right ", right);
            if (!resultString || resultString.length > right - left + 1) {
                resultString = s.slice(left, right + 1);
            }
            
            if (letterMap[leftLetter] === 0) {
                totalLength++;
            }
            letterMap[leftLetter]++;
            left++;
       
        }
        right++;
    }
    
    return resultString;
};