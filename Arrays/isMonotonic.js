var isMonotonic = function(nums) {
    let inc = 0;
    let dec = 0;
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] < nums[i+1]){
            inc++;
        } else if(nums[i] > nums[i+1]){
            dec++;
        }
    }

    if(inc == 0 || dec == 0){
        return true;
    } else {
        return false;
    }
};