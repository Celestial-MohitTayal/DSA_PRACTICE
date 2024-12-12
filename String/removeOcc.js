// Problem: Write a function that removes all occurrences of a specified character from a string without using built-in methods like replace() or split().

// Example Input: "hello world", "l" Example Output: "heo word"


function removeOcc(str, char) {
    let newStr = '';
    for(const char1 of str){
        if(char1 !== char)
            newStr += char1;
    }

    return newStr;
}


console.log(removeOcc("hello world", "l"));