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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    
    if (root === null) return result;
    
    // add the root to the queue
    // we then enqueue the node, and then iterate through the queue
    // for each level we create a new array and push the value into that array
    // we then check to see if that node has children, if so
    // push the children into the queue
    // push the array into the result array
    
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        const currentQueueLength = queue.length;
        let currentLevelArr = [];
        
        for (let i = 0; i < currentQueueLength; i++) {
            const currentNode = queue.shift();
            currentLevelArr.push(currentNode.val);
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevelArr);
    }
    
    return result
};