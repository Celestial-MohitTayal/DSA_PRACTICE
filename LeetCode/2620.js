//https://leetcode.com/problems/counter/


var createCounter = function(n) {
    var counter = n;
    return function() {
        return counter++;
    };
};