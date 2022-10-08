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
var diameterOfBinaryTree = function(root) {
    let totalLength = 0;
    traverseTree(root);
    function traverseTree(root) {
        if (root === null) return 0;
        const leftPath = traverseTree(root.left);
        const rightPath = traverseTree(root.right);
        totalLength = Math.max(totalLength, leftPath + rightPath);
        return Math.max(leftPath, rightPath) + 1;
    }
    return totalLength
};
