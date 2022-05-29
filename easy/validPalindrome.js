//  Given a string s, return true if it is a palindrome, or false otherwise.

//P:
//R:
//E:
//P: first determine the ascII values of characters

function isPalindrome(s) {
  const regex = /[^A-Za-z0-9]/g;
  const newString = s.replace(regex, "").toLowerCase();
  const reversedString = newString.split("").reverse().join("");
  return newString === reversedString;
}

function isPalindrome(s) {
  const regex = /[^A-Za-z0-9]/g;
  const newString = s.toLowerCase().replace(regex, "");

  for (let i = 0, j = newString.length - 1; i < j; i++, j--) {
    if (newString[i] !== newString[j]) {
      return false;
    }
  }
  return true;
}
