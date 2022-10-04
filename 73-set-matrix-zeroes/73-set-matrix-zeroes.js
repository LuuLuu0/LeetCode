/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// first we have to find out all the positions that have 0s
// im going to be using a queue to store the positions and then recursive DFS 
// through all the directions, up/down/left/right

var setZeroes = function(matrix) {
    const queue = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) queue.push([row, col]);
        }
    }
    
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        for (let currCol = 0; currCol < matrix[0].length; currCol++) {
            matrix[row][currCol] = 0;
        } 
        for (let currRow = 0; currRow < matrix.length; currRow++) {
            matrix[currRow][col] = 0;
        }
    }
};
