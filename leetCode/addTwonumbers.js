function addTwoNumbers(l1, l2, carryOver = 0) {
  if (l1 === null && l2 === null) {
    return carryOver === 0 ? null : new ListNode(carryOver);
  }

  const currentSum = (l1?.val || 0) + (l2?.val || 0) + carryOver;
  return new ListNode(
    currentSum % 10,
    addTwoNumbers(l1?.next || null, l2?.next || null, (currentSum / 10) >> 0)
  );
}
