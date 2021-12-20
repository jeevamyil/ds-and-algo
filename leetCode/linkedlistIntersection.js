var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  const nodes = new Set();
  let h1 = headA;
  let h2 = headB;
  while (h1) {
    nodes.add(h1);
    h1 = h1.next;
  }
  while (h2) {
    if (nodes.has(h2)) return h2;
    h2 = h2.next;
  }

  return null;
};
