// Given a roman numeral, convert it to an integer.

//P: string of roman numerals
//R: return value is an integer (convert roman numerals into integer)
//E: 'III' // 3; 'MMM' // 3000
//P: create an object with symbols I, V, X, L, C, D, M and their associated values; create a sum variable and set to zero; for loop

// Function declaration
function romanToInt(s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (sum -= symbols[s[i]])
      : (sum += symbols[s[i]]);
  }
  return sum;
}
