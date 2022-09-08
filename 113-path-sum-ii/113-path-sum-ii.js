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
 * @return {number[][]}
 */

// we want to create a helper function to traverse through 
// the tree to find all possible sum paths
// we need a result array to store the value routes
// we need to have a current array to store the values for each path

var pathSum = function(root, targetSum) {
    let currentArr = [];
    let resultArr = [];
    findAllPossiblePaths(root, targetSum, currentArr, resultArr);
    return resultArr;
};

const findAllPossiblePaths = (root, targetSum, currentArr, resultArr) => {
    if (root == null) {
        return;
    }
    currentArr.push(root.val);
    if (root.val === targetSum && root.left === null && root.right === null) {
        resultArr.push(currentArr.slice());
    } else {
        findAllPossiblePaths(root.left, targetSum - root.val, currentArr, resultArr);
        findAllPossiblePaths(root.right, targetSum - root.val, currentArr, resultArr);
    }
    currentArr.pop();
}