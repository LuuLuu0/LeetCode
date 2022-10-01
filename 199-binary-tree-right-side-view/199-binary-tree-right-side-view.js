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
    let rightSideNodes = [];
    if (!root) return rightSideNodes;
    traverseDFS(root, 0);
    return rightSideNodes;
    
    function traverseDFS(node, level) {
        if (!node) return;
        rightSideNodes[level] = node.val;
        traverseDFS(node.left, level+1);
        traverseDFS(node.right, level+1);
    }
};
