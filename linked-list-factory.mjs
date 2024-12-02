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

  pop() {
    let node = this.at(this.length - 2);
    this.tail = node;
    this.tail.next = null;
    this.length--;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  find(value) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return count;
      } else {
        currentNode = currentNode.next;
        count++;
      }
    }
    return null;
  }

  toString() {
    let strList = ``;
    let currentNode = this.head;
    while (currentNode !== null) {
      strList = strList + ` ( ${currentNode.value} ) ->`;
      currentNode = currentNode.next;
    }
    strList = strList + ` null`;
    return strList;
  }
}
