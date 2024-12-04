//https://leetcode.com/problems/filter-elements-from-array/


var filter = function(arr, fn) {
    let newArr = [];
    let i = 0;
    for(const num of arr){
         if(fn(num, i)){
            newArr.push(num);
         }
         i++;
    }
    return newArr;
};