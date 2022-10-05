/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
// iterate through through the matrix, if we find a gate : 0
// then we conduct a DFS/BFS through out the gate 
// and we set the position with the distance away from the gate
// if there are more than 1 gates then we set the minimum distance as the position
// if it's a -1 then we dont change it
const EMPTY = 2147483647, GATE = 0;

var wallsAndGates = function(rooms) {
    const queue = [];
    
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] === 0) {
                queue.push([row, col]);
            }
        }
    }
    
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [nRow, nCol] of deltas) {
            const neighborRow = row + nRow;
            const neighborCol = col + nCol;
                
            const rowInbound = 0 <= neighborRow && neighborRow < rooms.length;
            const colInbound = 0 <= neighborCol && neighborCol < rooms[0].length;
                
            if (!rowInbound || !colInbound) continue;
            if (rooms[neighborRow][neighborCol] !== EMPTY) continue;
                
            rooms[neighborRow][neighborCol] = rooms[row][col] + 1
            queue.push([neighborRow, neighborCol])
        }   
    }
};