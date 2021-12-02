//https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) {
        return l1 || l2;
    }
    let node = null;
    if (l1.val < l2.val) {
        node = l1;
        node.next = mergeTwoLists(l1.next, l2);
    } else {
        node = l2;
        node.next = mergeTwoLists(l1, l2.next);
    }
    return node;
};