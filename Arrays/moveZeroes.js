// Problem: Move all 0s in the array to the end while maintaining the order of other elements.
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function moveZeroes(arr) {
    let newArr = []

    for(const num of arr){
        if(num !== 0){
            newArr.push(num);
        }
    }

    for(let i = newArr.length; i < arr.length; i++){
        newArr.push(0);
    }

    return newArr;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));

//---------------------------------------

function moveZeroes(nums) {
    let lastNonZeroIndex = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]];
            lastNonZeroIndex++;
        }
    }

    return nums;
}

let arr = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr));  