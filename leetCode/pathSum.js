//https://leetcode.com/problems/path-sum/

const hasPathSum = (node, target) => {
    if (!node) return false;
    if (!node.left && !node.right) return target === node.val;
    return (
      hasPathSum(node.left, target - node.val) ||
      hasPathSum(node.right, target - node.val)
    );
  };