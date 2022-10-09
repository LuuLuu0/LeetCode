/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1;
    let col = 0;
    
    while (row >= 0) {
        if (matrix[row][col] <= target) {
            for (let i = col; i < matrix[0].length; i++) {
                if (matrix[row][i] === target) {
                    return true;
                }
            }
        }
        row -= 1;
    }
    return false;
};