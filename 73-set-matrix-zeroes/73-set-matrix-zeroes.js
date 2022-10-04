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
        traverseDFS(row, col, matrix, 'up');
        traverseDFS(row, col, matrix, 'left');
        traverseDFS(row, col, matrix, 'down');
        traverseDFS(row, col, matrix, 'right');
    }
};

const traverseDFS = (row, col, matrix, direction) => {
    const rowInbound = 0 <= row && row < matrix.length;
    const colInbound = 0 <= col && col < matrix[0].length;
    if (!rowInbound || !colInbound) return;
    matrix[row][col] = 0;
    if (direction === 'up') traverseDFS(row + 1, col, matrix, 'up');
    else if (direction === 'left')  traverseDFS(row, col - 1, matrix, 'left');
    else if (direction === 'right')  traverseDFS(row, col + 1, matrix, 'right');
    else if (direction === 'down')  traverseDFS(row - 1, col, matrix, 'down');
}