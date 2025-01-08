//https://leetcode.com/problems/array-reduce-transformation/description/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // return nums.reduce((acc, curr) => fn(acc, curr), init);
    let result = init;

    for(let num of nums){
        result = fn(result, num);
    }

    return result;
};