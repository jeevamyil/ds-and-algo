class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push = (value) => {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let oldHead = this.first;
      node.next = oldHead;
      this.first = node;
    }
    this.size++;
    return this.size;
  };
  pop = () => {
    if (!this.first) {
      return null;
    } else {
      let targetNode = this.first;
      this.first = targetNode.next;
      targetNode.next = null;
      this.size--;
      return targetNode;
    }
  };
}

let a = new Stack();
a.push(1);
a.push(2);
a.push(3);
a.push(4);

let b = a.pop();
console.log(a, b);
