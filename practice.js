//1 = 2 = 2 :- 2
//2 = 2 + 22 = 24 :- 2 + (2 * 10 + 2)
//3 = 2 + 22 + 222 = 246 :- 2 + (2 * 10 + 2) + (22 * 10 + 2)
//4 = 2 + 22 + 222 + 2222 =  2468 :- 2 + (2 * 10 + 2) + (22 * 10 + 2) + (222 * 10 +2)
function sumOfSeq(n, term) {
    if (n === 0) {
        return 0;
    }
    return term + sumOfSeq(n - 1, term * 10 + 2)
}
console.log(sumOfSeq(3, 2))


// Input: digits = [1,2,3]
// Output: [1,2,4]
// Input: digits = [9]
// Output: [1,0]
var plusOne = function(digits) {
     for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        
        if (digits[i] < 10) {
            return digits;
        }
        
        digits[i] = 0;
    }
    
    digits.unshift(1);
    
    return digits;
};

console.log(plusOne([2,9]))