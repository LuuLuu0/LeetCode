/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/*
I: 2 strings
O: the first index of the string found
C: NONE
E: not found
*/

// if the needle string is found in the haystack, return the index of the first occurence
// if it's not found, return -1

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};