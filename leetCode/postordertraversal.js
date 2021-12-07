//https://leetcode.com/problems/binary-tree-postorder-traversal/

var postorderTraversal = function (root) {
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

  if (root.right) {
    visitNode(root.right, arr);
  }
  if (root.val) {
    arr.push(root.val);
  }
  return arr;
};
