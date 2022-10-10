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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let answer = 0;
    traverseTree(root, low, high)
    
    function traverseTree(node, low, high) {
        if (node === null) return 0;
        if (node.val >= low && node.val <= high) {
            answer += node.val;
        }
        traverseTree(node.left, low, high);
        traverseTree(node.right, low, high);
    }
    return answer;
};

