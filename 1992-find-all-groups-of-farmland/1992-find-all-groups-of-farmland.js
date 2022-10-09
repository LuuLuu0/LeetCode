/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    // we want to return a 4 length array
    // [top left row, top left col, bottom right row, bottom right col]
    // iterate through matrix, until we find a farmland
    // conduct BFS through the farmland group
    // have an array to store all the positions
    // if the length of that array group is 0
    // one square farmland = bottom right = top left
    // add all the neighboring positions to the array
    const resultArr = [];
    const queue = [];
    
    for (let row = 0; row < land.length; row++) {
        for (let col = 0; col < land[0].length; col++) {
            if (land[row][col] === 1) {
                queue.push([row, col]);
                const groupArr = [row, col, row, col];
                while (queue.length > 0) {
                    const [currRow, currCol] = queue.shift();
                    const rowInbound = 0 <= currRow && currRow < land.length;
                    const colInbound = 0 <= currCol && currCol < land[0].length;
                    if (!rowInbound || !colInbound) continue;
                    if (land[currRow][currCol] === 0) continue;
                    land[currRow][currCol] = 0;
                    groupArr[2] = currRow;
                    groupArr[3] = currCol;
                    queue.push([currRow + 1, currCol]);
                    queue.push([currRow - 1, currCol]);
                    queue.push([currRow, currCol - 1]);
                    queue.push([currRow, currCol + 1]);
                }
                resultArr.push(groupArr);
            }
        }
    }
    return resultArr;
};

