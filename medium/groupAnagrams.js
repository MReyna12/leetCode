//  Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//P: array of strings
//R: return array, with anagram strings grouped into their own arrays; if a word doesn't have an anagram then solo array
//E:
//P: create an empty object; loop through each word of the input array; during each loop I will sort the letters of a word; then check to see if that sorted word is in the object, if not add the sorted word with a value of the actual word in an array to the object
// do the same thing each time, except if the sorted word already exists use the push method to add the actual word to the value of the sorted key; then use Object.values method to return an array of the values, which will be the grouping of anagrams

// function declaration
function groupAnagrams(strs) {
  let anagrams = {};

  for (const word of strs) {
    const letters = word.split("").sort().join("");
    if (anagrams[letters]) {
      anagrams[letters].push(word);
    } else {
      anagrams[letters] = [word];
    }
  }
  return Object.values(anagrams);
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
