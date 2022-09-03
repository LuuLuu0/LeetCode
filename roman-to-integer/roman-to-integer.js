/**
 * @param {string} s
 * @return {number}
 */

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

var romanToInt = function(s) {
    // let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let romanMap = {
        'M' : 1000,
        'CM' : 900,
        'D' : 500,
        'CD' : 400,
        'C' : 100,
        'XC' : 90,
        'L' : 50,
        'XL' : 40,
        'X' : 10,
        'IX' : 9,
        'V' : 5,
        'IV' : 4,
        'I' : 1
    }
    
    let int = 0;
    let count = 0;
    
    while (count < s.length) {
        if (s[count] + s[count + 1] === 'CM') {
            int += romanMap['CM'];
            count += 2;
        } else if (s[count] + s[count + 1] === 'CD') {
            int += romanMap['CD'];
            count += 2;
        } else if (s[count] + s[count + 1] === 'XC') {
            int += romanMap['XC'];
            count += 2;
        } else if (s[count] + s[count + 1] === 'XL') {
            int += romanMap['XL'];
            count += 2;
        } else if (s[count] + s[count + 1] === 'IX') {
            int += romanMap['IX'];
            count += 2;
        } else if (s[count] + s[count + 1] === 'IV') {
            int += romanMap['IV'];
            count += 2;
        } else {
            int += romanMap[s[count]];
            count += 1;
        }
    }
    return int;
};