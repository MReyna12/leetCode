function lengthOfLongestSubstring(s) {
  const map = {};
  let left = 0;

  return s.split("").reduce((max, char, index) => {
    const lastSeenIndex = map[char];
    const windowContainsCharacter = lastSeenIndex >= left;
    left = windowContainsCharacter ? lastSeenIndex + 1 : left;
    map[char] = index;
    const windowSize = index - left + 1;
    return Math.max(max, windowSize);
  }, 0);
}
