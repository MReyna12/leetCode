const numbers = [1, 24, 43, 32, 5];
const target = 30;
let closestSum = 0;

// Add numbers in array until it reaches the target;
const calculateClosestSum = (arr, limit) => {
  for (num of arr) {
    if (num + closestSum <= limit) {
      closestSum += num;
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

console.log(formSentence(wordsArray, wordTarget));
