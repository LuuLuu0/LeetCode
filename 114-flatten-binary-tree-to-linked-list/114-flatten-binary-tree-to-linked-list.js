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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let last = null;
    preOrderTraversal(root);
    return root;
    
    function preOrderTraversal(node) {
        if (node) {
            if (last) {
                last.left = null;
                last.right = node;
            }
            last = node;
            const right = node.right;
            preOrderTraversal(node.left);
            preOrderTraversal(right);
        }
    }
};