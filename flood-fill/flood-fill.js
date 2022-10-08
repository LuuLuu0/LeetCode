/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] === color) return image;
    const startingColor = image[sr][sc];
    const queue = [[sr, sc]];
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        image[row][col] = color;
        const deltas = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        for (let [nRow, nCol] of deltas) {
            const neighborRow = nRow + row;
            const neighborCol = nCol + col;
            const rowInbound = 0 <= neighborRow && neighborRow < image.length;
            const colInbound = 0 <= neighborCol && neighborCol < image[0].length;
            if (rowInbound && colInbound && image[neighborRow][neighborCol] === startingColor) {
                queue.push([neighborRow, neighborCol]);
            }
        }
    }
    return image
};