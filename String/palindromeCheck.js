// Problem: Write a function that checks whether a string is a palindrome (reads the same backward as forward) without using any built-in string methods.
// Example Input: "madam" Example Output: true

function checkPalindrome(str) {
    let i = 0;
    let j = str.length-1;
    while( i < j){
        if(str[i] == str[j]){
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}


console.log(checkPalindrome('mohit'));