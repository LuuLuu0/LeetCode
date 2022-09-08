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
var minDepth = function(root) {
    if (root === null) return 0;
    let queue = [];
    queue.push(root);
    let minDepth = 1;
    
    while (queue.length > 0) {
        let currLevel = queue.length;
        for (let i = 0; i < currLevel; i++) {
            let currNode = queue.shift();
            
            if (currNode.left === null && currNode.right === null) {
                return minDepth;
            }
            
            if (currNode.left !== null) {
                queue.push(currNode.left);
            }
            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }
        minDepth += 1;
    }
};