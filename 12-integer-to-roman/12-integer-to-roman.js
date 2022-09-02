/**
 * @param {number} num
 * @return {string}
 */

/*

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

*/

var intToRoman = function(num) {
    let romanResult = '';
    let symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    while (num !== 0) {
        for (let i = 0; i < nums.length; i++) {
            if (num >= nums[i]) {
                romanResult += symbols[i];
                num -= nums[i];
                break;
            }
        }
    }
    return romanResult;
};


    // let romanSet = {
    //     1000 : 'M',
    //     900 : 'CM',
    //     500 : 'D',
    //     400 : 'CD',
    //     100 : 'C',
    //     90 : 'XC',
    //     50 : 'L',
    //     40 : 'XL',
    //     10 : 'X',
    //     9 : 'IX',
    //     5 : 'V',
    //     4 : 'IV',
    //     1 : 'I'
    // }





