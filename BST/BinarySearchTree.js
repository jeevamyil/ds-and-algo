class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert = (value) => {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) {
        return undefined;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (value > current.value) {
          if (!current.right) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
  };
 
}

let a = new BST();

a.insert(10);
a.insert(5);
a.insert(33);
a.insert(7);
console.log(JSON.stringify(a), a.find(33), a.contains(33), a.contains(234));
