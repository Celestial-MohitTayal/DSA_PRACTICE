function reverseWords(input) {
  let words = [];
  let word = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      word += input[i];
    } else {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    }
  }

  if (word.length > 0) {
    words.push(word);
  }

  let reversedSentence = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i] + " ";
  }

  return reversedSentence.trim();
}

let input = "Hello I am Mohit";
let output = reverseWords(input);
console.log(output);
