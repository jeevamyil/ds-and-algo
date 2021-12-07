//https://leetcode.com/problems/symmetric-tree/submissions/

var isSymmetric = function (root) {
  if (!root) {
    return null;
  }
  return isSymmetricHelper(root.left, root.right);
};

const isSymmetricHelper = (root1, root2) => {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }
  return (
    root1.val === root2.val &&
    isSymmetricHelper(root1.right, root2.left) &&
    isSymmetricHelper(root1.left, root2.right)
  );
};
