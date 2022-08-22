class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(value, index) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;

    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  remove(index) {
    if (this.length > 0) {
      const nodeRemoved = this.getIndex(index - 1);
      const newNextNode = this.getIndex(index + 1);
      nodeRemoved.next = newNextNode;

      this.length--;
      return this;
    }

    return;
  }

  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myDoublyList = new MyDoublyLinkedList(1);

myDoublyList.append(2);
