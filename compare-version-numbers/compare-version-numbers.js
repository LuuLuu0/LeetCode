/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// we want to split the versions into a '.'
// then we want to compare each chunk of the array to see if theyre the same 
// if version1 is smaller than version2 then we return -1
// if version2 is smaller than version1 then we return 1
// if they are the same then we return 0

var compareVersion = function(version1, version2) {
    const v1Split = version1.split('.');
    const v2Split = version2.split('.');
    let maxLength = Math.max(v1Split.length, v2Split.length);

    for (let i = 0; i < maxLength; i++) {
        let v1Num = !v1Split[i] ? 0 : Number(v1Split[i]);
        let v2Num = !v2Split[i] ? 0 : Number(v2Split[i]);
        
        if (v1Num < v2Num) return -1;
        if (v1Num > v2Num) return 1;
    }
    
    return 0;
};