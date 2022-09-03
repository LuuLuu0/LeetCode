/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
 
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