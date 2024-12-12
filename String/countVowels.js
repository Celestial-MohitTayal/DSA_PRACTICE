// Problem: Write a function to count the number of vowels (a, e, i, o, u) in a given string without using built-in methods like match() or replace().
// Example Input: "Hello World" Example Output: 3 (because "e", "o", and "o" are vowels)

const countVowels = (str) => {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("Hello World"));
