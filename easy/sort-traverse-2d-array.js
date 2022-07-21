const array1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];

const array2 = [[9, 3, 4], [11], [42, 100]];

// const each = array.forEach((a, b) => {
//   console.log(`this is a: ${a[0]} and this is b: ${a[1]}`);
// });

// const sortedArray = array.sort((a, b) => {
//   if (a[0] === b[0]) {
//     return a[1] - b[1];
//   }
//   return b[0] - a[0];
// });

//console.log(sortedArray);

// Print all elements of the inner arrays

// Use nested for loops to traverse 2d arrays
for (let i = 0; i < array1.length; i++) {
  let subarray = array1[i];
  for (let j = 0; j < subarray.length; j++) {
    //console.log(subarray[j]);
  }
}

function print2d(array) {
  // Create the first for loop that will loop through each array within the array
  for (let i = 0; i < array.length; i++) {
    let subarray = array[i];
    for (let j = 0; j < subarray.length; j++) {
      console.log(subarray[j]);
    }
  }
}

//print2d(array1);
//print2d(array2);

// Return a 2d array with 'm' rows and 'n' elements within each array that contains the 'value' as every element

function makeMatrix(m, n, value) {
  let array = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      let element = value;
      row.push(element);
    }
    array.push(row);
  }
  return array;
}

//makeMatrix(2, 2, 0);

// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

function totalProduct(array) {
  let sum = 1;
  // Create a the first for loop to access the inner arrays and create a subarray variable
  for (let i = 0; i < array.length; i++) {
    let subarray = array[i];
    // Create a nested for loop that will multiply each element by the next element and store the total in the sum variable
    for (let j = 0; j < subarray.length; j++) {
      sum *= subarray[j];
    }
  }
  return sum;
}

// totalProduct([
//   [4, 6],
//   [2, 3],
//   [1, 2],
// ]);

// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

function twoSumPairs(numbers, target) {
  // Create an empty array in which the unique pairs will be added
  let arrayOfPairs = [];

  // Use nested loopsato allow each element to be added with another element to determine if the pairs equal the target
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        arrayOfPairs.push([numbers[i], numbers[j]]); // Once a pair is determined, push the paired elements into the arrayOfPairs
      }
    }
  }

  return arrayOfPairs;
}

//console.log(twoSumPairs([10, 7, 4, 5, 2], 12));

// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the
// same length.

// P: The parameters are two arrays and the elements of those arrays are strings and numbers, but the two types do not mix in one array
// R: Returning a 2d array, with each inner array containing pairs of elements at the same indices
// E: Example - if array1 = ['a'] and array2 = ['1'], then ['a', '1']
// P: Create an empty array that will hold subarrays. These subarrays will contain the paired elements based on having the same indices. Create a for loop that runs for the length of the first array (aka the number of elements inside the array).
// We will then create a variable that holds each element for array1 and another variable for each element of array2, if the indices are the same we'll add the pair to the subarray

function zipper(array1, array2) {
  let arrayOfPairs = [];

  for (let i = 0; i < array1.length; i++) {
    let array1Element = array1[i];
    let array2Element = array2[i];
    let pair = [array1Element, array2Element];
    arrayOfPairs.push(pair);
  }

  return arrayOfPairs;
}

console.log(zipper(["whisper", "talk", "shout"], ["quiet", "normal", "loud"]));
