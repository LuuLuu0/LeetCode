/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


// iterate through every single cell on the board
// then we check all of it's eight directions
// and then we check using the 4 rules
// if it's 1 and count is < 2 then = 0
// if its 1 and its equal to 2 or 3 then it stays as 1
// if its 1 and count is > 3 then = 0
// if its 0 and has equal to 3 then changes to 1
var gameOfLife = function(board) {
    let queue = [];
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            checkNeighbors(board, row, col, queue);
        }
    }

    while (queue.length > 0) {
        const [currRow, currCol, newState] = queue.shift();
        board[currRow][currCol] = newState
    }
    
};

const checkNeighbors = (board, row, col, queue) => {
    let liveCount = 0;
    
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1]];
    
    for (const [nRow, nCol] of directions) {
        const neighborRow = row + nRow;
        const neighborCol = col + nCol;
        const rowInbound = 0 <= neighborRow && neighborRow < board.length;
        const colInbound = 0 <= neighborCol && neighborCol < board[0].length;
        if (rowInbound && colInbound && board[neighborRow][neighborCol] === 1) {
            liveCount += 1;
        }
    }

    if (board[row][col] === 1 && liveCount < 2) {
        queue.push([row, col, 0])
    } else if (board[row][col] === 1 && liveCount > 3) {
        queue.push([row, col, 0])
    } else if (board[row][col] === 0 && liveCount === 3) {
        queue.push([row, col, 1])
    }
}