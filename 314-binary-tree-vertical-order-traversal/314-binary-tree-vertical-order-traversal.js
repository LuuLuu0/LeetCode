/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    const valuesMap = {};
    if (root === null) return [];
    let queue = [[root, 0]];
    while (queue.length > 0) {
        const [currNode, currCol] = queue.shift();
        if (!valuesMap[currCol]) {
            valuesMap[currCol] = [];
        }
        valuesMap[currCol].push(currNode.val);
        
        if (currNode.left !== null) {
            queue.push([currNode.left, currCol - 1]);
        }
        if (currNode.right !== null) {
            queue.push([currNode.right, currCol + 1]);
        }
    }
    const sortedMap = Object.keys(valuesMap).sort((a,b) => a-b);

    return sortedMap.map(columnNum => valuesMap[columnNum])
};