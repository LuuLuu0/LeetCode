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
var maxDepth = function(root) {
    let maxCount = 0;
    if (root === null) return maxCount;
    let queue = [root];
    
    while (queue.length > 0) {
        let queueLen = queue.length;
        for (let i = 0; i < queueLen; i++) {
            let currNode = queue.shift();
            
            if (currNode.left !== null) {
                queue.push(currNode.left);
            }
            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }
        maxCount += 1;
    }
    return maxCount;
};