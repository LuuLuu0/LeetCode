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
    // if the root is null or the root is equal to p or the root is equal to q
    // we return the root
    // otherwise we have to traverse DFS into the tree
    // then we check if the leftPath or rightPath contains the values of P or Q
    // once we have found it we return the root
    if (!root || root === p || root === q) {
        return root;
    }
    const leftPath = lowestCommonAncestor(root.left, p, q);
    const rightPath = lowestCommonAncestor(root.right, p, q);
    if (!leftPath) return rightPath;
    if (!rightPath) return leftPath;
    return root;
    
};