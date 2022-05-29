//  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Assumptions:
//  There will be always be at least one integer within the array / integers are always positive (at least the k param will always be positive)

//P: two params; param1 = array of integers and param2 = integer
//R: array of numbers that repeat at least k times
//E: [1,1,1,2,2,3], k = 2 // [1, 2]; [1], k = 1 // [1]
//P: create an empty object; for of loop to target each integer; if integer does not exist as a key in object, then add integer as a key and set value = 1; do the previous step for each integer; sort the object keys so highest frequency is first

function topKFrequent(nums, k) {
  let counterObject = {};
  for (const number of nums) {
    counterObject[number]
      ? counterObject[number]++
      : (counterObject[number] = 1);
  }
  const keys = Object.keys(counterObject);
  const sortedKeys = keys.sort((a, b) => counterObject[b] - counterObject[a]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(Number(sortedKeys[i]));
  }

  return result;
}
