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
  insert = (index, value) => {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(value);
    } else if (index === this.length) {
      return !!this.push(value);
    }
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  };
  remove = (index) => {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return !!this.shift();
    } else if (index === this.length - 1) {
      return !!this.pop();
    }
    let targetNode = this.get(index);
    let prevNode = targetNode.prev;
    let nextNode = targetNode.next;
    targetNode.next = null;
    targetNode.prev = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return targetNode;
  };
  print = () => {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  };
}

let a = new DLinkedList();
a.push("hola");
a.push("amigo");
a.push("!!!");
let b = a.remove(2);
a.print();
