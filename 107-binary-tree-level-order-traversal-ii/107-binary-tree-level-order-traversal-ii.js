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
var levelOrderBottom = function(root) {
    let resultArr = [];
    if (root === null) {
        return resultArr;
    }
    let queue = [root];
    while (queue.length > 0) {
        let currLevel = [];
        const queueLength = queue.length;
        
        for (let i = 0; i < queueLength; i++) {
            let currNode = queue.shift();
            
            currLevel.push(currNode.val);
            
            if (currNode.left !== null) {
                queue.push(currNode.left);
            }
            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }
        resultArr.unshift(currLevel);
    }
    return resultArr;
};