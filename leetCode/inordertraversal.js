//https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function (root) {
  let arr = visitNode(root, []);
  return arr;
};

var visitNode = function (root, arr) {
  if (!root) {
    return [];
  }

  if (root.left) {
    visitNode(root.left, arr);
  }

  if (root.val) {
    arr.push(root.val);
  }

  if (root.right) {
    visitNode(root.right, arr);
  }

  return arr;
};
