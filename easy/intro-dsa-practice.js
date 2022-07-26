let array = [1, 2, 3];

const firstEl = array[0];

for (const num of array) {
  console.log(num);
  if (num === 1) console.log("It is here!");
  break;
}

let numbers = [];
numbers.push(2);
numbers.push(200);

console.log(numbers);

const newArray = array.concat(numbers);

console.log(newArray);
