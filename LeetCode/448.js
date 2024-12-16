//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/


function findDisappearedNumbers(nums) {
    let n = nums.length;
    let map = new Array(n).fill(0);

    for(let i = 0; i < n; i++){
        map[nums[i] - 1] = 1;
    }
    const result = []
    for(let i = 0; i< n; i++) {
        if(map[i] == 0){
            result.push(i+1);
        }
    }

    return result;
}