class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;

    return this;
  }

  pop() {
    
  }

  peek() {
    return this.top;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

myStack.peek();

console.log(myStack);
console.log(myStack.peek());
