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

// Divide and Conquer - Recursively breaking down problem into subparts
// Merge Sort
function mergeSort(array) {
  // Sorts an array in ascending order
  // Create and return a new sorted array

  // Step one (Divide): Find the midpoint of the array and divide into subarrays
  // Step Two (Conquer): Recursively sort the subarrays created in the previous step
  // Step Three (Combine): Merge the sorted sublists created in the previous step

  // Takes 0(n log n) time ) - multiple split time and merge time to run

  if (array.length <= 1) return array;

  // Divide array into two
  let dividedArray = split(array);
  // Recursively sort the subarrays until we have single element arrays or empty arrays
  let left = mergeSort(dividedArray[0]);
  let right = mergeSort(dividedArray[1]);

  return merge(left, right);
}

function split(array) {
  // Divide the unsorted array at midpoint into sublists
  // Returns two subarrays - left and right
  // Takes overall O(log n) time

  let midpoint = array.length / 2;
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint);
  console.log(left, right);

  return [left, right];
}

function merge(left, right) {
  // Merges two arrays, sorting them in the process
  // Returns a new merged array
  // Runs in overall 0(n) time (liner time - takes n number of merge steps)

  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i += 1;
    } else {
      sortedArray.push(right[j]);
      j += 1;
    }
  }

  // If right array is shorter than the left
  while (i < left.length) {
    sortedArray.push(left[i]);
    i += 1;
  }

  // If left array is shorter than the right
  while (j < right.length) {
    sortedArray.push(right[j]);
    j += 1;
  }

  return sortedArray;
}

let unsortedArray = [23, 3352, 1, 4, 222, 21, 5, 20, 35, 200];
const something = mergeSort(unsortedArray);
console.log(something);
