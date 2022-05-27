//  Given an integer x, return true if x is palindrome integer.
//  An integer is a palindrome when it reads the same backward as forward.

//P: number (can be negative and potentially less than two digits)
//R: boolean true if palindrome, false otherwise
//E: 121 // true because 121; 123 // false because 321 read from right to left
//P: convert the number to a string; split method to put each string "number" into array; reverse method on the array; join to turn back into string; compare original string to new string, if equal then true if not then false

// Function declaration; toString method; split/reverse methods; for loop
function isPalindrome(x) {
  const originalString = x.toString();
  const originalArray = originalString.split("");
  const reversedArray = originalArray.reverse();
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] !== reversedArray[i]) {
      return false;
    }
  }
  return true;
}

// Function declaration; toString method; split/reverse/join methods
function isPalindrome(x) {
  const originalString = x.toString();
  const originalArray = originalString.split("");
  const reversedArray = originalArray.reverse();
  const newString = reversedArray.join("");
  return originalString === newString;
}

// Function declaration; toString method; for loop
function isPalindrome(x) {
  const string = x.toString();
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}

// Function declaration
function isPalindrome(x) {
  var revNumber = 0;
  while (x > 0) {
    revNumber = revNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return revNumber;
}
