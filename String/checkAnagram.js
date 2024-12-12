// Problem: Write a function that checks if two strings are anagrams (contain the same characters in any order) without using built-in methods like sort() or split().
// Example Input: "listen", "silent" Example Output: true

const childFunc = (str) => {
  let strFreq = {};
  for (const char of str) {
    strFreq[char] = (strFreq[char] || 0) + 1;
  }
  return strFreq;
};

const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let strFreq1 = childFunc(str1);
  let strFreq2 = childFunc(str2);

  for (const char in str1) {
    if (strFreq1[char] !== strFreq2[char]) {
      return false;
    }
  }
  return true;
};

console.log(checkAnagram("listen", "silent"));
