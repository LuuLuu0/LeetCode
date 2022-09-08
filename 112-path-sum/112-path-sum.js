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
 * @param {number} targetSum
 * @return {boolean}
 */

// recursively traverse the tree using a DFS 
// we start from the root and if the root is null, return false
// we have the base case that if we are at a leaf node and the value is equal to the sum
// we traverse through the tree by subtracting its value

var hasPathSum = function(root, targetSum) {
    if (root === null) return false;
    
    if (root.val === targetSum && root.left === null && root.right === null) {
        return true;
    }
    
    return (hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val))
};