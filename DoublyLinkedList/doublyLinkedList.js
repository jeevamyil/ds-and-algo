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
    } else {
      let oldNode = this.head;
      oldNode.prev = node;
      node.next = oldNode;
      this.head = node;
    }
    this.length++;
    return this;
  };
  get = (index) => {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = null;
    let counter = null;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        counter++;
        current = current.next;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        counter--;
        current = current.prev;
      }
    }
    return current;
  };
  set = (index, value) => {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  };
  
}

let a = new DLinkedList();
a.push("hola");
a.push("amigo");
a.push("!!!");
let b = a.remove(2);
a.print();
