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
    let queue = [[root.left, root.right]];
    
    while (queue.length > 0) {
        const [leftNode, rightNode] = queue.shift();
        if (leftNode === null && rightNode === null) return true;
        if (leftNode === null || rightNode === null) return false;
        if (leftNode.val !== rightNode.val) return false;
        
        if (leftNode.left || rightNode.right) {
            queue.push([leftNode.left, rightNode.right]);
        }
        if (leftNode.right || rightNode.left) {
            queue.push([leftNode.right, rightNode.left]);
        }
    }
    return true;
};