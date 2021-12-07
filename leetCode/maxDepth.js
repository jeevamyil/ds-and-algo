//https://leetcode.com/problems/maximum-depth-of-binary-tree/


var maxDepth = function(root) {
    if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
}