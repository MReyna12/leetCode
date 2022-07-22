class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

// Iterate through every node of the linked list
// Example
/*const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};*/

// Practice Attempt - 1
/*const printLinkedList = (head) => {
  let current = head;

  while (current !== null) {
    console.log(current);
    current = current.next;
  }
};*/

// Practice Attempt - 2
const printLinkedList = (head) => {
  if (head === null) return null;

  let current = head;

  while (current) {
    console.log(current);
    current = current.next;
  }
};

//printLinkedList(a);

// Recursive way to log every node of the linked list

/*const recursivePrintLinkedList = (head) => {
  if (head === null) return;
  console.log(head.value);
  recursivePrintLinkedList(head.next);
};*/

// Practice Attempt - 1
/*const recursivePrintLinkedList = (head) => {
  if (head === null) return;
  console.log(head);
  recursivePrintLinkedList(head.next);
};*/

// Practice Attempt - 2
const recursivePrintLinkedList = (head) => {
  if (head === null) return;
  //console.log(head);
  return recursivePrintLinkedList(head.next);
};

//console.log(recursivePrintLinkedList(a));

// Return an array containing all values of the nodes in the linked list through iteration
/*const linkedListValues = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  return values;
};*/

//Practice Attempt - 1
/*const linkedListValues = (head) => {
  let current = head;
  const arrayOfNodes = [];

  while (current !== null) {
    arrayOfNodes.push(current.value);
    current = current.next;
  }

  return arrayOfNodes;
};*/

// Practice Attempt - 2
const linkedListValues = (head) => {
  // Create array
  let array = [];

  let current = head;
  // Create while loop
  while (current !== null) {
    array.push(current.value);
    current = current.next;
  }

  return array;
};

//console.log(linkedListValues(a));

//Return an array containing all values of the nodes in the linked list via recursion
// const showLinkedListValues = (head) => {
//   const values = [];
//   fillValues(head, values);
//   return values;
// };

// const fillValues = (head, values) => {
//   if (head === null) return;
//   values.push(head.value);
//   fillValues(head.next, values);
// };

// Practice Attempt - 1
// const showLinkedListValues = (head) => {
//   let arrayOfNodes = [];
//   fillValues(head, arrayOfNodes);
//   return arrayOfNodes;
// };

// const fillValues = (head, values) => {
//   if (head === null) return;
//   values.push(head.value);
//   return fillValues(head.next, values);
// };

// Practice Attempt -2
const showLinkedListValues = (head) => {
  const array = [];
  fillValues(head, array);
  return array;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.value);
  return fillValues(head.next, values);
};

//console.log(showLinkedListValues(a));

// Sum of values in linked list
const two = new Node(2);
const eight = new Node(8);
const three = new Node(3);
const negOne = new Node(-1);
const seven = new Node(7);

two.next = eight;
eight.next = three;
three.next = negOne;
negOne.next = seven;

// Sum via iterating through each current node and adding its value to sum
// const sumList = (head) => {
//   let sum = 0;
//   let current = head;

//   while (current !== null) {
//     sum += current.value;
//     current = current.next;
//   }
//   return sum;
// };

// Practice Attempt - 1
// const sumList = (head) => {
//   let current = head;
//   let sum = 0;

//   while (current !== null) {
//     sum += current.value;
//     current = current.next;
//   }

//   return sum;
// };

// Practice Attempt - 2
const sumList = (head) => {
  // Create sum variable
  let sum = 0;
  let current = head;

  while (current !== null) {
    sum += current.value;
    current = current.next;
  }

  return sum;
};

//console.log(sumList(two));

// Sum via recursion
// const recursiveSumList = (head) => {
//   if (head === null) return 0;
//   return head.value + recursiveSumList(head.next);
// };

// const recursiveSumList = (head) => {
//   if (head === null) return 0;
//   return head.value + recursiveSumList(head.next);
// };

// Practice Attempt - 1
const recursiveSumList = (head) => {
  if (head === null) return 0;
  return head.value + recursiveSumList(head.next);
};

//console.log(recursiveSumList(two));

// Find a target value in a linked list
// const linkedListFind = (head, target) => {
//   let current = head;

//   while (current !== null) {
//     if (current.value === target) {
//       return true;
//     }
//     current = current.next;
//   }
//   return false;
// };

// Practice Attempt - 1
/*const linkedListFind = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.value === target) {
      return true;
    }
    current = current.next;
  }

  return false;
};*/

// Practice Attempt - 2
const linkedListFind = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.value === target) {
      return true;
    }
    current = current.next;
  }

  return false;
};

//console.log(linkedListFind(a, "C"));

// Find a target value with recursion
// const recursiveLinkedListFind = (head, target) => {
//   if (head === null) return false;
//   if (head.value === target) return true;

//   return recursiveLinkedListFind(head.next, target);
// };

// Practice Attempt - 1
/*const recursiveLinkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.value === target) return true;

  return recursiveLinkedListFind(head.next, target);
};*/

// Practice Attempt - 2
const recursiveLinkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.value === target) return true;

  return recursiveLinkedListFind(head.next, target);
};

//console.log(recursiveLinkedListFind(a, "C"));

// Get node value

// Iteration
// const getNodeValue = (head, index) => {
//   let current = head;
//   let count = 0;

//   while (current !== null) {
//     if (count === index) {
//       return current.value;
//     }
//     current = current.next;
//     count += 1;
//   }

//   return null;
// };

// Practice Attempt - 1
/*const getNodeValue = (head, index) => {
  let current = head;
  let counter = 0;

  while (current !== null) {
    if (counter === index) {
      return current.value;
    }
    current = current.next;
    counter++;
  }

  return null;
};*/

// Practice Attempt - 2
const getNodeValue = (head, index) => {
  // Create current variable and a counter; counter will help determine the index and return the node value at said index (assuming the index exists in the list)
  let current = head;
  let count = 0;

  while (current !== null) {
    if (count === index) {
      return current.value;
    }
    current = current.next;
    count++;
  }

  return null;
};

//console.log(getNodeValue(a, 3));

// Recursion
// const recursiveGetNodeValue = (head, index) => {
//   if (head === null) return null;
//   if (index === 0) return head.value;

//   return recursiveGetNodeValue(head.next, index - 1);
// };

// Practice Attempt - 1
/*const recursiveGetNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.value;

  return recursiveGetNodeValue(head.next, index - 1);
};*/

//console.log(recursiveGetNodeValue(a, 2));

// Reverse linked list

// Iteration
// const reverseList = (head) => {
//   let previous = null;
//   let current = head;
//   while (current !== null) {
//     const next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//   }
//   return previous;
// };

// Practice Attempt - 1
const reverseList = (head) => {
  let current = head;
  let previous = null;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

//console.log(reverseList(a));

// Recursive version
// const recursiveReverseList = (head, prev = null) => {
//   if (head === null) return prev;
//   const next = head.next;
//   head.next = prev;
//   return recursiveReverseList(next, head);
// };

// Practice Attempt - 1
const recursiveReverseList = (head, prev = null) => {
  if (head === null) return prev;
  let next = head.next;
  head.next = prev;
  return recursiveReverseList(next, head);
};

//console.log(recursiveReverseList(a));

// Zipper lists

// Iteration
// const zipperLists = (head1, head2) => {
//   let tail = head1;
//   let current1 = head1.next;
//   let current2 = head2;
//   let count = 0;

//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next;
//     count += 1;
//   }

//   if (current1 !== null) {
//     tail.next = current1;
//   }
//   if (current2 !== null) {
//     tail.next = current2;
//   }

//   return head1;
// };

// Practice Attempt - 1
const zipperLists = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let counter = 0;

  while (current1 !== null && current2 !== null) {
    if (counter % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    counter += 1;

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
  }

  return head1;
};

//console.log(zipperLists(a, two));

// Recursion
// const recursiveZipperList = (head1, head2) => {
//   if (head1 === null && head2 === null) return null;
//   if (head1 === null) return head2;
//   if (head2 === null) return head1;

//   const next1 = head1.next;
//   const next2 = head2.next;
//   head1.next = head2;

//   head2.next = recursiveZipperList(next1, next2);

//   return head1;
// };

// Practice Attempt - 1
const recursiveZipperList = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;

  head2.next = recursiveZipperList(next1, next2);
  return head1;
};

//console.log(recursiveZipperList(a, two));
