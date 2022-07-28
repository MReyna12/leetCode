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

// Practice Attempt - 1
class Node1 {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList1 {
  // Create head via constructor
  constructor() {
    this.head = null;
  }

  // Empty
  isEmpty() {
    return this.head === null;
  }
  // Returns the number of nodes in the list
  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      current = current.next;
      count += 1;
    }

    return count;
  }
  // Add a node
  addNode(data) {
    let node = new Node1(data);
    node.next = this.head;
    this.head = node;
  }

  // Search for a node based on a value given
  search(key) {
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

  // Insert at a specific index position

  // Remove a node based on a value given
  remove(key) {
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

  // Print all nodes in list
  printAllNodes() {
    let current = this.head;

    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const linkedList1 = new LinkedList1();
linkedList1.addNode(30);
linkedList1.addNode(20);
linkedList1.addNode(10);

// Divide and Conquer - Recursively breaking down problem into subparts
// Merge Sort
function mergeSort(array) {
  // Sorts an array in ascending order
  // Create and return a new sorted array

  // Step one (Divide): Find the midpoint of the array and divide into subarrays
  // Step Two (Conquer): Recursively sort the subarrays created in the previous step
  // Step Three (Combine): Merge the sorted sublists created in the previous step

  // Takes 0(n log n) time ) - multiple split time and merge time to run
  //console.log(`this is the array: ${array}`);
  if (array.length <= 1) return array;

  // Divide array into two
  let dividedArray = split(array);
  // Recursively sort the subarrays until we have single element arrays or empty arrays
  let left = mergeSort(dividedArray[0]);
  //console.log(`this is left: ${left}`);
  let right = mergeSort(dividedArray[1]);
  //console.log(`this is the right: ${right}`);

  return merge(left, right);
}

function split(array) {
  // Divide the unsorted array at midpoint into sublists
  // Returns two subarrays - left and right
  // Takes overall O(log n) time

  let midpoint = Math.floor(array.length / 2);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint);
  //console.log(`this is the left array: ${left}`);
  //console.log(`this is the right array: ${right}`);

  return [left, right];
}

function merge(left, right) {
  //console.log(`this is left: ${left} and this is the right: ${right}`);
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
//console.log(something);

// Merge Sort in One Function
function mergeSort2(array) {
  //console.log(array);
  if (array.length <= 1) return array;

  // Get the middle point of the array and split in half; save those halves into two variables (left/right)
  let mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  console.log(`This is left: ${left}`);
  // The arrays must continue to be split in half until there is one value for left and one for right,
  // so we call mergeSort2 again
  const leftValues = mergeSort2(left);
  const rightValues = mergeSort2(right);
  console.log(`this is leftValues: ${leftValues}`);

  // Create an empty array for sorted values to be put in and a left/right index to target the split values to be compare
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // While loop to compare the values in left/right
  while (leftIndex < leftValues.length && rightIndex < rightValues.length) {
    if (leftValues[leftIndex] < rightValues[rightIndex]) {
      sortedArray.push(leftValues[leftIndex]);
      leftIndex += 1;
    } else {
      sortedArray.push(rightValues[rightIndex]);
      rightIndex += 1;
    }
  }

  while (leftIndex < leftValues.length) {
    sortedArray.push(leftValues[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < rightValues.length) {
    sortedArray.push(rightValues[rightIndex]);
    rightIndex += 1;
  }

  return sortedArray;
}

const sortedNumbers = mergeSort2(unsortedArray);
//console.log(sortedNumbers);

// Merge Sort
function mergeSort3(array) {
  // Sorts an array in ascending order
  // Create and return a new sorted array

  // Step one (Divide): Find the midpoint of the array and divide into subarrays
  // Step Two (Conquer): Recursively sort the subarrays created in the previous step
  // Step Three (Combine): Merge the sorted sublists created in the previous step

  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Continue breaking the the arrays down until one value remains through recursion
  const leftValues = mergeSort3(left);
  const rightValues = mergeSort3(right);

  // Sort and combine subarrays into a sorted array
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftValues.length && rightIndex < rightValues.length) {
    // Compare the left values at the applicable index position to the right values
    if (leftValues[leftIndex] < rightValues[rightIndex]) {
      sortedArray.push(leftValues[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightValues[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftValues.length) {
    sortedArray.push(leftValues[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightValues.length) {
    sortedArray.push(rightValues[rightIndex]);
    rightIndex++;
  }

  return sortedArray;
}

const mergeandsort = mergeSort3(unsortedArray);
//console.log(mergeandsort);

// Practice Attempt - 1
const mergeSort4 = (array) => {
  if (array.length <= 1) return array;
  // Find the midpoint of the input array
  const mid = Math.floor(array.length / 2);
  // Assign the first half to a left variable and the second half to a right variable
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  // Recursively continue to break down the subarrays until one value remains
  const leftValues = mergeSort4(left);
  const rightValues = mergeSort4(right);
  // Create: 1. an empty array the length of the input array and 2. three indices - one for leftValues, one for rightValues, and one to determine the position the lesser value will go in the new array
  let sortedArray = new Array(array.length);
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedIndex = 0;

  while (leftIndex < leftValues.length && rightIndex < rightValues.length) {
    if (leftValues[leftIndex] < rightValues[rightIndex]) {
      sortedArray[sortedIndex] = leftValues[leftIndex];
      leftIndex += 1;
    } else {
      sortedArray[sortedIndex] = rightValues[rightIndex];
      rightIndex += 1;
    }
    sortedIndex += 1;
  }

  // Values still left in leftValues, then this loop runs
  while (leftIndex < leftValues.length) {
    sortedArray[sortedIndex] = leftValues[leftIndex];
    leftIndex += 1;
    sortedIndex += 1;
  }

  // Value still left in rightValues, then this loop runs
  while (rightIndex < rightValues.length) {
    sortedArray[sortedIndex] = rightValues[rightIndex];
    rightIndex += 1;
    sortedIndex += 1;
  }

  return sortedArray;
};

const mergeit = mergeSort4(unsortedArray);
console.log(mergeit);
