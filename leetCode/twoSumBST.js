//https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

var findTarget = function (root, k) {
  let temp = [];
  const traverse = (r) => {
    if (r === null) {
      return null;
    }
    if (r.left) traverse(r.left);
    temp.push(r.val);
    if (r.right) traverse(r.right);
  };

  traverse(root);
  let i = 0;
  let j = temp.length - 1;

  while (i < j) {
    let acc = temp[i] + temp[j];
    if (acc === k) {
      return true;
    } else if (acc < k) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};
