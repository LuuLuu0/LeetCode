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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let bottomLeftValue = null;
    if (root === null) {
        return bottomLeftValue;
    }
    let queue = [root];
    while (queue.length > 0) {
        let queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            const currNode = queue.shift();
            
            if (i === 0) {
                bottomLeftValue = currNode.val;
            }
            if (currNode.left !== null) {
                queue.push(currNode.left);
            }
            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }
    }
    return bottomLeftValue;
};