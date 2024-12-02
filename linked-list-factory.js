export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.next = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {}
}

const myList = new LinkedList();
myList.append("perro");
myList.append("gato");
myList.append("caballo");
myList.prepend("gallo");

console.log(myList);
const mySize = myList.size();
console.log(mySize);

const myHead = myList.getHead();
console.log(myHead);

const myTail = myList.getTail();
console.log(myTail);

const atRes = myList.at(0);
console.log(atRes);

myList.pop();

console.log(myList);
