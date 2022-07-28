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
