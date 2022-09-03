/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    transpose(matrix);
    reflect(matrix);
    return matrix;
};

const transpose = (matrix) => {
    let temp;
    let length = matrix.length;
    
    for (let row = 0; row < length; row++) {
        for (let col = row + 1; col < length; col++) {
            temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
    return matrix;
}

const reflect = (matrix) => {
    let temp;
    let length = matrix.length;
    
    for (let row = 0; row < length; row++) {
        for (let col = 0; col < length / 2; col++) {
            temp = matrix[row][col];
            matrix[row][col] = matrix[row][length - col - 1];
            matrix[row][length - col - 1] = temp;
        }
    }
    return matrix
}