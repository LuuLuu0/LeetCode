/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board.length) return [];
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            // Only dfs if an 'O' and on the edge
            if (board[row][col] === 'O' && 
            (row === 0 || row=== board.length - 1 || col === 0 || col === board[0].length - 1)) {
                DFSTraversal(row, col, board);
            }
        }
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 'XO') {
                board[row][col] = 'O';
            } else {
                board[row][col] = 'X';
            }
        }
    }
    
    return board;

    function dfs(row, col) {
        if (row< 0 || row >= board.length 
            || col < 0 || col >= board[0].length 
            || board[row][col] === 'X' || board[row][col] === 'XO') {
            return;
        }
        
        board[row][c] = 'XO';
        
        dfs(row+ 1, col);
        dfs(row- 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }
};

const DFSTraversal = (row, col, board) => {
    if (row< 0 || row >= board.length 
        || col < 0 || col >= board[0].length 
        || board[row][col] === 'X' || board[row][col] === 'XO') {
        return;
    }
        
    board[row][col] = 'XO';
        
    DFSTraversal(row+ 1, col, board);
    DFSTraversal(row- 1, col, board);
    DFSTraversal(row, col - 1, board);
    DFSTraversal(row, col + 1, board);
}