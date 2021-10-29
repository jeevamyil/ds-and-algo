class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

 
}

let a = new DLinkedList();
a.push("hola");
a.push("amigo");
a.push("!!!");
let b = a.remove(2);
a.print();
