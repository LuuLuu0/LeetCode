/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

/*
we need to compare each set of digits from .
if version1 < version2 return -1
if version2 < version 1 return 1
if they are the same version return 0
*/
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    
    const maxLength = Math.max(v1.length, v2.length);
    
    for (let i = 0; i < maxLength; i++) {
        let version1Number, version2Number;
        if (!v1[i]) {
            version1Number = 0;
        } else {
            version1Number = Number(v1[i]);
        }
        if (!v2[i]) {
            version2Number = 0;
        } else {
            version2Number = Number(v2[i]);
        }
        
        if (version1Number < version2Number) return -1;
        else if (version1Number > version2Number) return 1;
    }
    
    return 0;
};