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


var isValidBST = function(root) {
    return depthSearch(root, -Infinity, Infinity);
};

const depthSearch = (root, minBound, maxBound) => {
    if (root === null) return true;
    if (root.val <= minBound || root.val >= maxBound) {
        return false
    }
    return depthSearch(root.left, minBound, root.val) && depthSearch(root.right, root.val, maxBound);
}

