var detectCycle = function (head) {
  let mem = new Set();
  let temp = head;
  while (temp) {
    if (mem.has(temp)) return temp;
    mem.add(temp);
    temp = temp.next;
  }
  return temp;
};
