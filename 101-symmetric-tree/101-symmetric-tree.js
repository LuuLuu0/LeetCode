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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // BASE CASE
    if (checkSymmetry(root.left, root.right) === false) {
        return false;
    }
    return true;
};

const checkSymmetry = (leftNode, rightNode) => {
    if (leftNode === null && rightNode === null) return true;
    if (leftNode === null || rightNode === null) return false;
    if (leftNode.val !== rightNode.val) return false;
    
    return checkSymmetry(leftNode.left, rightNode.right) && checkSymmetry(leftNode.right, rightNode.left);
}