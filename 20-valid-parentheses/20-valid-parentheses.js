/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }
    
    const stack = [];
    for (const string of s) {
        if (string in bracketMap) {
            stack.push(bracketMap[string]);
        } else if (string !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};