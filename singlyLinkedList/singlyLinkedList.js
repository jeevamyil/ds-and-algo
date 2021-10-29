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
      current.next= null;
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
  insert = (index, value) => {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(value);
    } else if (index === this.length) {
      return !!this.push(value);
    } else {
      let targetNode = this.get(index - 1);
      let newNode = new Node(value);
      let temp = targetNode.next;
      targetNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  };
  remove = (index) => {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let prevNode = this.get(index - 1);
      let targetNode = prevNode.next;
      prevNode.next = targetNode.next;
      this.length--;
      return targetNode;
    }
  };
  reverse = () => {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  };
  print=()=>{
    let arr = [];
    let current = this.head
    while(current){
        arr.push(current.val)
        current = current.next
    }
    console.log(arr);
};
}

ll = new LinkedList();
ll.push("hi");
ll.push("there");
ll.push("!!!");
ll.remove(2);
console.log(ll);

