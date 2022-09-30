/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) return root;
    const leftPath = lowestCommonAncestor(root.left, p, q);
    const rightPath = lowestCommonAncestor(root.right, p, q);
    if (!leftPath) return rightPath;
    if (!rightPath) return leftPath;
    return root;
};