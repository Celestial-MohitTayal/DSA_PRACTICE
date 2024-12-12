const findMax = (nums) => {
    let max = nums[0]
    for(let i = 1; i<nums.length; i++){
        if(max<nums[i]){
            max = nums[i];
        }
    }
     return max;
}
console.log(findMax([1,2,5,3,8,4]));