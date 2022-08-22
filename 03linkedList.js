class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySingleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const node = new Node(value);

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

let myLinkedList = new MySingleLinkedList(1);
// console.log(myLinkedList);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(0);
myLinkedList.insert(5, 3);
console.log(JSON.stringify(myLinkedList, null, 2));
myLinkedList.remove(3);
console.log(JSON.stringify(myLinkedList, null, 2));
