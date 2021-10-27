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
        node.next=oldHead;
        this.length++;
        return this;
    }
  };
}

ll = new LinkedList();
ll.push("hi");
ll.push("there");
ll.push("!!!");
console.log(ll,"start");
let i = ll.shift();
console.log(ll, i,"shifted");
ll.unshift(i);
console.log(ll,"unshifted")
