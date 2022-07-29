// P: Array of integers
// R: True if there exists two integers N and M such that N is double of M
// E: [10, 2, 5, 3] - true (5 * 2 = 10)
// P: Create a hash table with elements and their multiplied values and check to see if number exists in the table already via loop/conditional

const checkIfExist = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]) {
        return true;
      }
    }
  }

  return false;
};
