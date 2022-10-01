/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// iterate through the city, and keep track if it has been visited
var findCircleNum = function(isConnected) {
    let visitedSet = new Set();
    let count = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (!visitedSet.has(i)) {
            traverseDFS(isConnected, visitedSet, i);
            count += 1;
        }
    }
    return count;
};

const traverseDFS = (isConnected, visitedSet, i) => {
    for (let j = 0; j < isConnected.length; j++) {
        if (isConnected[i][j] === 1 && !visitedSet.has(j)) {
            visitedSet.add(j);
            traverseDFS(isConnected, visitedSet, j);
        }
    }
}