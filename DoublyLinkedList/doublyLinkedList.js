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

  push = (val) => {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let oldNode = this.tail;
      oldNode.next = node;
      node.prev = oldNode;
      this.tail = node;
    }
    this.length++;
    return this;
  };

  pop = () => {
    let targetNode = this.tail;
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevNode = targetNode.prev;
      targetNode.prev = null;
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;
    return targetNode;
  };
  shift = () => {
    let targetNode = this.head;
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = targetNode.next;
      targetNode.next = null;
      newHead.prev = null;
      this.head = newHead;
    }
    this.length--;
    return targetNode;
  };
  unshift = (val) => {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    } else {
      let oldNode = this.head;
      oldNode.prev = node;
      node.next = oldNode;
      this.head = node;
    }
    this.length++;
    return this;
  };
  
}

let a = new DLinkedList();
a.push("hola");
a.push("amigo");
a.push("!!!");
let b = a.remove(2);
a.print();
