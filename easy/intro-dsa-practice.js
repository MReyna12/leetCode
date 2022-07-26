let array = [1, 2, 3];

const firstEl = array[0];

for (const num of array) {
  //console.log(num);
  if (num === 1)
    //console.log("It is here!");
    break;
}

let numbers = [];
numbers.push(2);
numbers.push(200);

const newArray = array.concat(numbers);

//console.log(newArray);

// Building a Linked List
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // Singly linked list
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    // Returns the number of nodes in the list and takes linear time
    let current = this.head;
    let count = 0;

    while (current) {
      count += 1;
      current = current.next;
    }
    return count;
  }

  addNode(data) {
    // Adds a new node containing data at the head of the list
    // Takes constant time O(1)
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  search(key) {
    // Search for the first node containing data that matches the key
    // Returns the node or null if not found
    // Takes O(n) or linear time
    let current = this.head;

    while (current) {
      if (current.data === key) {
        return current;
      } else {
        current = current.next;
      }
    }
    return null;
  }

  insert(data, index) {
    // Insert a new node containing data at index position (treating node positioning as zero based)
    // Insertion takes O(1) time but finding the node at the insertion point takes linear time (O(n))
    // Takes overall linear time
    if (index === 0) {
      this.addNode(data);
    }

    if (index > 0) {
      const node = new Node(data);

      let position = index;
      let current = this.head;

      while (position > 1) {
        current = current.next;
        position -= 1;
      }

      let previous = current;
      let next = current.next;

      previous.next = node;
      node.next = next;
    }
  }

  remove(key) {
    // Removes node containing data that matches the key
    // Returns the node or null if key doesn't exist in the list
    // Worst case scenario is 0(n) time
    let current = this.head;
    let previous = null;
    let found = false;

    while (current && !found) {
      if (current.data === key && current === this.head) {
        found = true;
        this.head = current.next;
      }
      if (current.data === key) {
        found = true;
        let next = current.next;
        previous.next = next;
        console.log(current);
      } else {
        previous = current;
        current = current.next;
      }
    }
    return current;
  }

  printListNodes() {
    let current = this.head;

    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.addNode(30);
linkedList.addNode(20);
linkedList.addNode(10);
linkedList.insert(40, 3);
linkedList.remove(30);
//console.log(linkedList.search(30));
//console.log(linkedList.isEmpty());
//console.log(linkedList.size());
//linkedList.printListNodes();
