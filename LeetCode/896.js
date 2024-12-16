//https://leetcode.com/problems/monotonic-array/description/

var isMonotonic = function(nums) {
    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < nums.length-1; i++){
            let j = i + 1;
            if(nums[i] < nums[j]){
                count1++;
            } else if(nums[i] > nums[j]) {
                count2++;
            }
    }

    if(count2 == 0 || count1 == 0){
        return true;
    }
    return false;
};

//-------------------------------------------------

function isMonotonic(nums) {
    let increasing = false;
    let decreasing = false;

    // Iterate through the array to check for increasing or decreasing trend
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            increasing = true;  // Found an increasing trend
        }
        if (nums[i] < nums[i - 1]) {
            decreasing = true;  // Found a decreasing trend
        }
    }

    // If both increasing and decreasing trends are found, the array is not monotonic
    return !(increasing && decreasing);
}