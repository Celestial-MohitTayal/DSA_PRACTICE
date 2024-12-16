// Problem: Given an array of integers, find the first repeated element.
// Input: [1, 2, 3, 4, 2, 5]
// Output: 2 (First repeated element)


function firstRepeatedElem(arr) {
    let countNum = {}
    for(const num of arr) {
        countNum[num] = (countNum[num] || 0) + 1;
    }

    for(const num of arr) {
        if(countNum[num] > 1){
            return num;
        }
    }
}

console.log(firstRepeatedElem([1, 2, 3, 4, 2, 5]));
