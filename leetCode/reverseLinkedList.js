//https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
    let prev = null;
    while (head) {
        const temp = head.next;     
        head.next = prev;     
         prev = head;      
    }
    
  
    return prev;
}