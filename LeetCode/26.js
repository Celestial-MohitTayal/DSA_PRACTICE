//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function(nums) {
    let freq = {}
    let length = 0;

    for(const num of nums){
        if(!freq[num]){
            freq[num] = true;
            nums[length] = num;
            length++;
        }
    }
    return length;
};

//---------------------------------

//Two - pointer Method Faster Code

var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {  
            slow++;  
            nums[slow] = nums[fast];  
        }
    }
    return slow + 1;
};