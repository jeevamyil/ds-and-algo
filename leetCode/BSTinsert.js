//https://leetcode.com/problems/insert-into-a-binary-search-tree/submissions/

var insertIntoBST = function (root, val) {
  let node = new TreeNode(val);
  if (!root) return node;
  let current = root;
  while (true) {
    if (current.val > val) {
      if (!current.left) {
        current.left = node;
        return root;
      } else {
        current = current.left;
      }
    } else {
      if (!current.right) {
        current.right = node;
        return root;
      } else {
        current = current.right;
      }
    }
  }
};

/*var insertIntoBST = function (root, val) {
  let node = new TreeNode(val);
  if (!root) return node;
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};*/
