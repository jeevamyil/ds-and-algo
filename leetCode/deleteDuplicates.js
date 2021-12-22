var deleteDuplicates = function (head) {
  function remove(node) {
    if (!node) return null;
    if (!node.next) return node;
    if (node.val === node.next.val) {
      while (node.next && node.val === node.next.val) node = node.next;
      return remove(node.next);
    }
    node.next = remove(node.next);
    return node;
  }
  return remove(head);
};
