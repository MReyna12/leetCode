// P: Array of integers
// R: True if there exists two integers N and M such that N is double of M
// E: [10, 2, 5, 3] - true (5 * 2 = 10)
// P: Create an empty object; use a for loop and create keys with the current value in the array multiplied by 2 and divided by 2; check if the key already exists, if so return true; otherwise if true never returned then return false

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

const checkIfExist1 = (arr) => {
  const valueCheckingTable = {};

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    if (valueCheckingTable[currentValue] !== undefined) {
      return true;
    } else {
      valueCheckingTable[currentValue * 2] = currentValue;
      valueCheckingTable[currentValue / 2] = currentValue;
    }
  }

  return false;
};

const checkIfExist3 = (arr) => {
  // Create object to hold keys
  let object = {};

  // Use for loop + conditional to check if key exists, if not set value to anything as we are not check values
  for (const num of arr) {
    if (object[num * 2] || object[num / 2]) {
      return true;
    }
    object[num] = true;
    console.log(object);
  }

  return false;
};
