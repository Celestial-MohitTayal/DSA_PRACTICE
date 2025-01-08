// https://leetcode.com/problems/chunk-array/description/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    let subArr = [];

    for(let i = 0; i < arr.length; i++) {
        subArr.push(arr[i]);
        if(subArr.length === size){
            result.push(subArr);
            subArr = [];
        }
    }

    if(subArr.length > 0){
        result.push(subArr);
    }

    return result;
};
