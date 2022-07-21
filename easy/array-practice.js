const numbers = [1, 24, 43, 32, 5];
const target = 23;

// Add numbers in array until it reaches the target, if it cannot reach the target then add numbers to get as close as you can to target;
const calculateClosestSum = (arr, limit) => {
  let closestSum = 0;
  for (const number of arr) {
    if (closestSum + number <= limit) {
      closestSum += number;
    }
  }

  for (const num of arr) {
    if (closestSum < num && num <= limit) {
      return num;
    }
  }
  return closestSum;
};

console.log(calculateClosestSum(numbers, target));

// Check if a word in a string is the same as a word in an array and if so add it to a new string
const wordsArray = ["hello", "ten", "ben", "chicken"];
const wordTarget = "hello chicken";

const formSentence = (arr, target) => {
  const targetArray = target.split(" ");

  let sentence = "";
  let count = 0;
  for (word of arr) {
    if (word === targetArray[count]) {
      sentence += `${word}`;
      count += 1;
    }
  }
  console.log(wordTarget);
  return sentence;
};

//console.log(formSentence(wordsArray, wordTarget));
