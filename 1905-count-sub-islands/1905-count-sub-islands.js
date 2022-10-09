/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */


var countSubIslands = function(grid1, grid2) {
    let isSubIsland = true;
    let subIslandCount = 0;
    
    for (let row = 0; row < grid2.length; row++) {
        for (let col = 0; col < grid2[0].length; col++) {
            if (grid2[row][col] === 1) {
                traverseIsland(row, col);
                if (isSubIsland) {
                    subIslandCount += 1;
                }
                isSubIsland = true;
            }
        }
    }
    
    function traverseIsland(row, col) {
        if (grid1[row][col] !== grid2[row][col]) {
            isSubIsland = false;
        }
        grid2[row][col] = 0;
        const deltas = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        for (let [nRow, nCol] of deltas) {
            const neighborRow = row + nRow;
            const neighborCol = col + nCol;
            const rowInbound = 0 <= neighborRow && neighborRow < grid2.length;
            const colInbound = 0 <= neighborCol && neighborCol < grid2[0].length;
            if (rowInbound && colInbound && grid2[neighborRow][neighborCol] === 1) {
                traverseIsland(neighborRow, neighborCol);
            }
        }
    }
    
    return subIslandCount;
};
