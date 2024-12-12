//https://leetcode.com/problems/shuffle-string/

var restoreString = function(s, indices) {
    let combination = {}
    let sortedStr = ''
    for(let i = 0; i < s.length; i++){
        combination[indices[i]] = s[i]
    }

    for(let i = 0; i < s.length; i++){
        sortedStr += combination[i];
    }

    return sortedStr;
};