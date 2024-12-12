// Problem: Write a function that finds the first non-repeated character in a string without using built-in methods like indexOf() or lastIndexOf().
// Example Input: "swiss" Example Output: 'w' (the first non-repeated character)



// const firstNonReapeating = (str) => {
//     let charFreq = {}

//     for(const char of str){
//         charFreq[char] =   (charFreq[char] || 0) + 1;
//     }

//     for(const char of str){
//         if(charFreq[char] == 1){
//             return char;
//         }
//     }
// }


// console.log(firstNonReapeating('swiss'));

const firstNonRepeat  = (str) => {
    let temp = {};
    let firstUnique = "";
    for(let i = 0; i<str.length; i++){
        // console.log(str[i]);
    if(temp[str[i]]){
    temp[str[i]] = temp[str[i]] + 1;
    } else{
    temp[str[i]] == 1
    }
    }
    console.log(temp);
    for(let i = 0; i<str.length; i++){
    if(temp[str[i]] == 1){
    firstUnique += str[i];
    }
    }
    console.log(firstUnique);
    return firstUnique;
    }
    firstNonRepeat("swiss")

    // console.log(firstNonRepeat("swiss"));