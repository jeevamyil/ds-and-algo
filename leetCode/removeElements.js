
//https://leetcode.com/problems/remove-linked-list-elements/


var removeElements = function(head, val) {
    if(!head){
        return head
    }

    let current= head;
 
    while(current&&current.next){
        if(current.next.val === val){
            let temp= current.next.next;
            current.next = temp;
           // current.next.next =null;
        }
        else{
           current= current.next;
        }
    }
      while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    return head
};