

var swapPairs = function(head) {
    let node= head;
    while(node&&node.next){
        let a =node.val;
        node.val = node.next.val;
        node = node.next;
        node.val = a
        node = node.next;
    }
    return head
};