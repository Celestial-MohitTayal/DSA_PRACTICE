str = "Short Longest";

function longestWord(s) {
  let currWord = "";
  let longestWord = "";

  for (let char of s) {
    if ((char == " ")) {
      if (currWord.length > longestWord.length) {
        longestWord = currWord;
      }
      currWord = "";
    } else {
      currWord += char;
    }
  }

  if (longestWord.length < currWord.length) {
    longestWord = currWord;
  }

  return longestWord;
}

console.log(longestWord(str));

// let count = 0;
// let word = ""
// let test = {};
// for(let char of s){
//     if(char == " "){
//         test[word] = count;
//         word = "";
//         count = 0;
//     } else {
//         word += char;
//         count++;
//     }
// }

// if (word) {
//     test[word] = count;
//   }

// let length = 0;
// let result = "";

// for(let word in test){
//     if(test[word] > length){
//         length = test[word];
//         result = word;
//     }
// }

// return result;
