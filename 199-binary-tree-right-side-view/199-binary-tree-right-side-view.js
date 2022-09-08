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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];
    if (root === null) {
        return result;
    }
    let queue = [root];
    
    while (queue.length > 0) {
        let queueLen = queue.length;
        
        for (let i = 0; i < queueLen; i++) {
            let currNode = queue.shift();
            if (i === queueLen - 1) {
                result.push(currNode.val);
            }
            if (currNode.left !== null) {
                queue.push(currNode.left);
            }
            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }
    }
    return result;
};