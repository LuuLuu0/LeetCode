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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false
    const foundMatch = traverseTree(root, subRoot);
    if (foundMatch) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const traverseTree = (root, subRoot) => {
    // if they are both null, we return true
    if (!root && !subRoot) return true;
    // if the root is null, and the subroot is not null OR the subroot is null and the root is not null
    if (!root && subRoot || root && !subRoot) return false;
    // if the values are equal to each other, we return true;
    if (root.val !== subRoot.val) return false;
    // DFS to the children
    return traverseTree(root.left, subRoot.left) && traverseTree(root.right, subRoot.right);
}


