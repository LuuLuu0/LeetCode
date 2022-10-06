/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var count = 1;
    for (var i = 1; i <= chars.length; i++) {
        if (chars[i] == chars[i - 1]) {
            count++;
        } else {
            if (count > 1) {
                var countArr = (count).toString().split(''); //transform number
                var deletedElem = chars.splice(i - count + 1, count - 1, ...countArr); //update array
                i = i - deletedElem.length + countArr.length; //update index
            }
            count = 1;
        }
    }

    return chars.length;
};