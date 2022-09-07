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
var zigzagLevelOrder = function(root) {
    let resultArr = [];
    if (root === null) return resultArr;
    let queue = [];
    queue.push(root);
    let currentLevel = 0;
    
    while (queue.length > 0) {
        let currLength = queue.length;
        let currLevelArr = [];
        
        for (let i = 0; i < currLength; i++) {
            let currNode = queue.shift();
            if (currentLevel % 2 === 0) {
                currLevelArr.push(currNode.val);
            } else {
                currLevelArr.unshift(currNode.val);
            }
            if (currNode.left !== null) {
                queue.push(currNode.left);
            }
            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }
        
        currentLevel += 1;
        resultArr.push(currLevelArr);
    }
    
    return resultArr;
};