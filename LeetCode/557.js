//https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

var reverseWords = function(s) {
    // let newStr = ''
    // let word = ''

    // for(let i = 0; i < s.length; i++){
    //     if(s[i] == " "){
    //         newStr += word.split('').reverse().join('') + " ";
    //         word = '';
    //     } else {
    //         word += s[i]
    //     }
    // }

    // if(word.length > 0){
    //     newStr += word.split('').reverse().join('')
    // }

    // return newStr;
    return s
    .split(" ")               // Split the string into words
    .map((word) => word.split("").reverse().join("")) // Reverse each word
    .join(" ");               
};