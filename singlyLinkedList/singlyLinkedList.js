class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push = (value) => {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  };
  pop = () => {
    if (!this.head) {
      return undefined;
    } else {
      let currentNode = this.head;
      let newTail = currentNode;
      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
  };
  shift = () => {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newHead = current.next;
      this.head = newHead;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  };
  unshift = (val) => {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      node.next = oldHead;
      this.length++;
      return this;
    }
  };
  get = (index) => {
    if (index < 0 || index > this.length || this.length === 0) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        counter++;
        current = current.next;
      }
      return current;
    }
  };
  set = (index, value) => {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  };
 
}

ll = new LinkedList();
ll.push("hi");
ll.push("there");
ll.push("!!!");
console.log(ll.get(1));
console.log(ll.set(1, "hola"));
console.log(ll);
