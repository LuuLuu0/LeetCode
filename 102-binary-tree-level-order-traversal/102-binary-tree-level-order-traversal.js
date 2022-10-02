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
var levelOrder = function(root) {
    const resultArr = [];
    traverseDFS(root, 0);
    
    function traverseDFS(root, levelNum) {
        if(root === null) return;
        if (resultArr.length === levelNum) {
            resultArr[levelNum] = [root.val];
        } else {
            resultArr[levelNum].push(root.val);
        }
        traverseDFS(root.left, levelNum + 1);
        traverseDFS(root.right, levelNum + 1);
    }
    return resultArr;
};