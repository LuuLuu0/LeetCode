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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const differences = new Set();
    return traverseTree(root);
    function traverseTree(root) {
        if (root === null) return false;
        let diff = k - root.val;
        if (differences.has(diff)) {
            return true;
        }
        differences.add(root.val)
        return traverseTree(root.left) || traverseTree(root.right)
    }
};