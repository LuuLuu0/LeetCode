/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let encodedString = '';
    for (let i = 0; i < strs.length; i++) {
        encodedString += strs[i];
        if (i !== strs.length - 1) {
            encodedString += 'ā';   
        }
    }
    return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return s.split('ā');
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */