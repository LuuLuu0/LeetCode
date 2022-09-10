/**
 * @param {character[][]} grid
 * @return {number}
 */
// Input: a m x n grid filled with 1's representing islands and 0s representing water
// Output: the number of islands within the grid
// what constitutes as an island: 1s that are connected by adjacent islands
// up, down, left, right

// From the looks of this problem, I guess we will have to traverse the islands
// using a BFS approach to see the surrounding neighbor islands
// as we traverse through the other surrounding islands
// we will also need to keep track of the islands that we have already visited prior
// as we traverse, if the island is a 0, or water we continue/skip
// once we have traversed through a whole island, increment an island counter
// return the island counter

var numIslands = function(grid) {
    // create island counter
    let islandCounter = 0;
    // create a visited set to track 
    let visitedIslands = new Set();
    
    // iterate through the m x n grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (traverseIsland(row, col, grid, visitedIslands)) {
                islandCounter += 1;   
            }
        }
    }
    
    return islandCounter;
};

const traverseIsland = (row, col, grid, visitedIslands) => {
    if (isPositionInvalid(row, col, grid)) return false;
    let currPosition = row + ',' + col;
    if (visitedIslands.has(currPosition)) return false;
    
    visitedIslands.add(currPosition);
    
    traverseIsland(row + 1, col, grid, visitedIslands);
    traverseIsland(row, col + 1, grid, visitedIslands);
    traverseIsland(row - 1, col, grid, visitedIslands);
    traverseIsland(row, col - 1, grid, visitedIslands);
    
    return true;
}

const isPositionInvalid = (row, col, grid) => {
    let maxRowLength = grid.length;
    let maxColLength = grid[0].length;
    
    if (row < 0 || row >= maxRowLength) return true;
    if (col < 0 || col >= maxColLength) return true;
    if (grid[row][col] === '0') return true;
    
    return false;
}