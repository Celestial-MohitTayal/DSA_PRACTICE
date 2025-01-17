// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let mapArray = [];
    for(let i = 0; i < arr.length; i++){
        mapArray.push(fn(arr[i], i));
    }
    return mapArray;
};