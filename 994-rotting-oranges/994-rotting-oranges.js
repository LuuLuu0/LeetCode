/**
 * @param {number[][]} grid
 * @return {number}
 */
// we need to keep track of all the fresh oranges in the grid
// we need to track the location of the rotten oranges as well as keeping track of the minutes
// so all adjacent oranges become rotten
// we need to keep track of the oranges as we traverse so that we dont traverse the same oranges
var orangesRotting = function(grid) {
    let freshOrangeCount = 0;
    const queue = [];
    // iterate through the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) freshOrangeCount += 1;
            if (grid[row][col] === 2) queue.push([row, col]);
        }
    }
    let minuteCount = 0;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift();
            const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (let [rowDirection, colDirection] of deltas) {
                const neighborRow = row + rowDirection;
                const neighborCol = col + colDirection;
                const rowInbound = 0 <= neighborRow && neighborRow < grid.length;
                const colInbound = 0 <= neighborCol && neighborCol < grid[0].length;
                if (!rowInbound || !colInbound) continue;
                if (grid[neighborRow][neighborCol] === 0) continue;
                if (grid[neighborRow][neighborCol] === 1) {
                    grid[neighborRow][neighborCol] = 2;
                    freshOrangeCount -= 1;
                    queue.push([neighborRow, neighborCol]);
                }
            }
        }
        if (queue.length > 0) minuteCount += 1;
    }
    if (freshOrangeCount === 0) return minuteCount;
    return -1;
};
