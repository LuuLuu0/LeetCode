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
var averageOfLevels = function(root) {
    let resultArr = [];
    if (root === null) return resultArr;
    
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let totalNodes = queue.length;
        let totalSum = 0;
        
        for (let i = 0; i < totalNodes; i++) {
            let currNode = queue.shift();
            totalSum += currNode.val;
            if (currNode.left !== null) {
                queue.push(currNode.left);
            }
            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }
        resultArr.push(totalSum/totalNodes);
    }
        return resultArr;
};