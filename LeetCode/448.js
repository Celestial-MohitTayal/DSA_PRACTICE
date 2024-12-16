//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/


// var findDisappearedNumbers = function(nums) {
//     let disappearedNum = [];
//     for(let i = 1; i <= nums.length; i++){
//         if(!nums.includes(i)){
//             disappearedNum.push(i);
//         }
//     }

//     return disappearedNum;
// };

function findDisappearedNumbers(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        const index = num - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);  
        }
    }

    return result;
}