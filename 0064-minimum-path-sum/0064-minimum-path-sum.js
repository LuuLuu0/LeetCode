/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (row === 0 && col === 0) {
                continue;
            } else if (row === 0) {
                grid[row][col] += grid[row][col - 1];
            } else if (col === 0) {
                grid[row][col] += grid[row - 1][col];
            } else {
                grid[row][col] += Math.min(grid[row][col - 1], grid[row - 1][col]);
            }
        }
    }
    return grid[grid.length - 1][grid[0].length - 1]
};