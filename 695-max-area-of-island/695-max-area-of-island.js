/**
 * @param {number[][]} grid
 * @return {number}
 */
// we want to traverse through the entire grid
// once we find a position that is an island denoting it as 1
// we then performed a DFS/BFS of the island through it's 4 directions
// then we keep count of the island size as well
// we return the island size and then we also have a result island size
// we take the max between them
// return the result island size

var maxAreaOfIsland = function(grid) {
    let maxSize = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                const currSize = traverseIsland(row, col, grid)
                maxSize = Math.max(currSize, maxSize);
            }
        }
    }
    
    return maxSize;
};

const traverseIsland = (row, col, grid) => {
    const rowInbound = 0 <= row && row < grid.length;
    const colInbound = 0 <= col && col < grid[0].length;
    if (!rowInbound || !colInbound) return 0;
    if (grid[row][col] === 0) return 0;
    
    let currSize = 1;
    grid[row][col] = 0;
    
    return currSize + traverseIsland(row + 1, col, grid) + traverseIsland(row - 1, col, grid) + traverseIsland(row, col + 1, grid) + traverseIsland(row, col - 1, grid);
}