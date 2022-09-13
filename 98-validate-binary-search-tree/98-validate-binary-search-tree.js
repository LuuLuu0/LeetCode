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
// var isValidBST = function(root) {
//     const sortedArray = treeInorderTraversal(root);
//     let temp = sortedArray[0];
//     for (let i = 1; i < sortedArray.length; i++) {
//         if (sortedArray[i] <= temp) return false;
//         temp = sortedArray[i];
//     }
//     return true;
// };

// const treeInorderTraversal = (root) => {
//     if (root === null) return [];
//     const leftPath = treeInorderTraversal(root.left);
//     const rightPath = treeInorderTraversal(root.right);
    
//     return [...leftPath, root.val, ...rightPath];
// }

const isValidBST = (root) => {
    return traverseTreeDFS(root, -Infinity, Infinity);
}

const traverseTreeDFS = (root, minBound, maxBound) => {
    if (root === null) return true;
    if (root.val <= minBound || root.val >= maxBound) {
        return false;
    }
    return traverseTreeDFS(root.left, minBound, root.val) && traverseTreeDFS(root.right, root.val, maxBound);
}