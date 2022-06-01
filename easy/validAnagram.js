//  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//P: two strings
//R: boolean; true if anagram false otherwise
//E: 'pat' 'tap' // true; 'fish' 'dog' // false
//P: create empty object; for loop that adds the letters of first strings letters to the object; second for loop checks to see if each letter in the second string (1) exists in the object//all values don't hit zero before the loop stops

// Function declaration; sort method
function isAnagram(s, t) {
  const firstStringArray = s.split("");
  const sortedArray = firstStringArray.sort();
  const sortedString = sortedArray.join("");
  const secondStringArray = t.split("");
  const secondSortedArray = secondStringArray.sort();
  const secondSortedString = secondSortedArray.join("");
  return sortedString === secondSortedString;
}

// Function declaration
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let letterCount = {};

  for (const letter of s) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  for (const letter of t) {
    console.log(letterCount);
    if (!letterCount[letter]) {
      return false;
    } else {
      letterCount[letter]--;
    }
  }
  return true;
}

// Arrays/Hashing DSA

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let letterObject = {};

  for (const sLetter of s) {
    letterObject[sLetter]
      ? letterObject[sLetter]++
      : (letterObject[sLetter] = 1);
  }

  for (const tLetter of t) {
    if (!letterObject[tLetter]) {
      return false;
    } else {
      letterObject[tLetter]--;
    }
  }
  return true;
}

// Works for 32/36 test cases, but really long strings take too long to compare and time out on leetcode; Queue DSA practice
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sArray = s.split("");
  const tArray = t.split("");
  while (sArray.indexOf(tArray[0]) !== -1) {
    let firstLetterOfS = sArray.shift();
    if (firstLetterOfS === tArray[0]) {
      tArray.shift();
    } else {
      sArray.push(firstLetterOfS);
    }
  }
  return sArray.length === 0 && tArray.length === 0;
}

// Arrays/Hashing DSA
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let letterCount = {};

  for (const sLetters of s) {
    letterCount[sLetters]
      ? letterCount[sLetters]++
      : (letterCount[sLetters] = 1);
  }

  for (const tLetters of t) {
    if (!letterCount[tLetters]) {
      return false;
    } else {
      letterCount[tLetters]--;
    }
  }

  return true;
}
