//https://leetcode.com/problems/linked-list-cycle/

/*var hasCycle = function(head) {
    let mem = new Set();
    let temp =head;
    while(temp!= null){
        if(mem.has(temp)) return true
        else{
            mem.add(temp)
        }
        temp= temp.next
    }
    return false
};
*/

//using floyds tortoise and hare algo

var hasCycle = function(head) {
    let sl= head;
    let fst =head;
    while(fst&& fst.next&& fst.next.next){
        sl=sl.next;
        fst = fst.next.next;
       if(sl===fst) return true;
    }
    return false
};


