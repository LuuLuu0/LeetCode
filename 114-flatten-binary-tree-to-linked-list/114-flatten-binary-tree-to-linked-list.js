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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
    const list = [];
    helper(root, list);
    
    if(list.length === 0 ) return;
    
    for(let i = 0; i < list.length - 1; i++) {
        const node = list[i];
        node.left = null;
        node.right = list[i + 1];
    }
    
    const lastNode = list[list.length -1];
    lastNode.left = null;
    lastNode.right = null;
};

const helper = (node, list) => {
    if(!node) return;
    
    list.push(node);
    helper(node.left, list);
    helper(node.right, list);
}