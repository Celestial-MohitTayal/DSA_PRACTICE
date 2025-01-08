//https://leetcode.com/problems/counter/

var createCounter = function(n) {
    let boolean = false;
    let counter = n;
    return function() {
        if(boolean){
            counter = counter + 1;
            return counter;
        } else {
            boolean = true;
            return counter;
        }
    };
};


var createCounter1 = function(n) {
    return function() {
    return n++;
  };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */