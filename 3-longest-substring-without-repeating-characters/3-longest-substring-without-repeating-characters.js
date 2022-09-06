/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let charMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currLetter = s[windowEnd];
    if (!(currLetter in charMap)) charMap[currLetter] = 0;
    charMap[currLetter] += 1;

    while (charMap[currLetter] >= 2) {
      const prevLetter = s[windowStart];
      charMap[prevLetter] -= 1;
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};