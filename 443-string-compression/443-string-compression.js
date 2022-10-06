/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let windowStart = 0
    let windowEnd = 0
    let compressString = '';
    if (chars.length)
    while (windowStart < chars.length) {
        if (chars[windowStart] === chars[windowEnd]){
            windowEnd += 1;
        }  else {
            if (windowEnd - windowStart === 1) {
                compressString += chars[windowStart];
                windowStart = windowEnd;
            } else {
                compressString += chars[windowStart];
                compressString += (windowEnd - windowStart);
                windowStart = windowEnd;   
            }
        }
    }
    while (chars.length > compressString.length) {
        chars.pop();
    }
    for (let i = 0; i < compressString.length; i++) {
        chars[i] = compressString[i];
    }
};