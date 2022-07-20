class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//const n1 = new Node(100);

//console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If there is nothing, then that means no head, so make it the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      // Once the next property no longer has a value of a node object, meaning it is null, we then set the current.next value of the previous last node object to a new node which will now be the last node of the list
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index (aka anywhere in between first and last node)
  insertAt(data, index) {
    // Trying to insert at an index that doesn't exist
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first node in the list
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before the index we want to insert
      //console.log(`this is the previous: ${current.data}`);
      count++;
      current = current.next;
      //console.log(`this is the current: ${current.data}`);
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 3);
//linkedList.removeAt(3);

linkedList.clearList();

linkedList.printListData();

//linkedList.getAt(10);
