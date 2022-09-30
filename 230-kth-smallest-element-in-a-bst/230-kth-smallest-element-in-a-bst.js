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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const inOrderArray = traverseTree(root);
    return inOrderArray[k - 1];

};

const traverseTree = (root) => {
    if (root === null) return [];
    const leftPath = traverseTree(root.left);
    const rightPath = traverseTree(root.right);
    return [...leftPath, root.val, ...rightPath];
}

// maybe can do it iteratively as well?

