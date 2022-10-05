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
var minDiffInBST = function(root) {
    let previous = null;
    let minDiff = Infinity;
    DFSTraversal(root);
    function DFSTraversal(node) {
        if (node === null) return;
        DFSTraversal(node.left);
        if (previous !== null) {
            minDiff = Math.min(minDiff, node.val - previous);
        }
        previous = node.val
        DFSTraversal(node.right)
    }
    return minDiff;
};
