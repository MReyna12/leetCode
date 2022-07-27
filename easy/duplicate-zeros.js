const intArray = new Array(6);

for (let i = 0; i < 3; i++) {
  intArray[i] = i;
}

for (let i = 3; i < intArray.length; i++) {
  intArray[i] = i;
}

console.log(intArray);

for (let i = intArray.length; i >= 0; i--) {
  intArray[i] = intArray[i - 1];
  if (i === 0) {
    intArray[i] = 10;
  }
}
console.log(intArray);

for (let i = intArray.length; i > 1; i--) {
  intArray[i] = intArray[i - 1];
  if (i === 2) {
    intArray[i] = 20;
  }
}

console.log(intArray);
