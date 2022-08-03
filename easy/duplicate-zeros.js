const intArray = new Array(6);

for (let i = 0; i < 3; i++) {
  intArray[i] = i;
}

for (let i = 3; i < intArray.length; i++) {
  intArray[i] = i;
}

//console.log(intArray);

for (let i = intArray.length; i >= 0; i--) {
  intArray[i] = intArray[i - 1];
  if (i === 0) {
    intArray[i] = 10;
  }
}
//console.log(intArray);

for (let i = intArray.length; i > 1; i--) {
  intArray[i] = intArray[i - 1];
  if (i === 2) {
    intArray[i] = 20;
  }
}

//console.log(intArray);

// P: Fixed-length array of integers
// R: No return value
// E:
// P: For loop that starts at index 0; if a value in an index is === 0, then shift all numbers after the value over one and make the current zero value equal to zero as well; then skip over the zero that was just added

const duplicateZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    }
  }
};

// Practice Attempt - 1
const duplicateZeros1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    }
  }
};

// Practice Attempt - 2

// P: integer array
// R: nothing; however, the result should be to modify the input array so that it includes duplicate instances of 0s. The length of the array does NOT increase
// E: [0, 1, 2, 3, 0] // [0, 0, 1, 2, 3]
// P:

const duplicateZeros2 = (arr) => {
  // Two pointers using two for loops
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    }
  }
};

// P: An array of integers
// R: No explicit return. The outpout should be a modified version of the input array that duplicates zeros within the input array, if any. The length of the input array should not be expanded, so as values are shifted to the right they will be removed.
// E: [0, 1, 2, 3, 0] - [0, 0, 1, 2, 3]
// P: Use two pointers - the first pointer begins at index 0 and the last pointer begins at the last element of the input array and decreases after each loop; the first loop checks to see if an element is equal to 0, if so then the second loop runs
// and shifts each over one to the right, which will duplicate any zeros because the second loop only runs until it is not greater than i (so as to not shift the value over at index i which will be zero because that's the only way the second loop runs)

const duplicateZeros3 = (arr) => {
  // Create first for loop and a conditional to check the array for elements equal to zero
  for (let i = 0; i < arr.length; i++) {
    // Conditional to determine if the second for loop needs to run to shift each element over one to the right
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      // Since we shifted values, we need to increment i one more time or else when it increments by 1 the next value will always be zero
      i++;
    }
  }
};

// Practice Attempt - 1

const duplicateZeros4 = (arr) => {
  // Create first for loop and a conditional to check the array for elements equal to zero
  for (let i = 0; i < arr.length; i++) {
    // Conditional to determine if the second for loop needs to run to shift each element over one to the right
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      // Since we shifted values, we need to increment i one more time or else when it increments by 1 the next value will always be zero
      i++;
    }
  }
};
