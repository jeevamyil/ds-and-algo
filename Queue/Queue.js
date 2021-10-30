class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue = (value) => {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let targetNode = this.last;
      targetNode.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  };
  dequeue = () => {
    if (!this.first) {
      return null;
    } else {
      let targetNode = this.first;
      if(this.first === this.last) {
        this.last = null;
    }
      this.first = targetNode.next;
      targetNode.next = null;
      this.size--;
      return targetNode.value;
    }
  };
}

let a = new Queue();
a.enqueue(1);
a.enqueue(2);
a.enqueue(3);
a.enqueue(4);

let b = a.dequeue();
console.log(a, b);