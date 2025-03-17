let arr = [1,2,3,4,5,4];

function findDuplicate(arr) {
    let hashMap = {};
    
    for(let num of arr) {
        hashMap[num] = (hashMap[num] || 0) + 1;
    }
    
    for(let num of arr){
        if(hashMap[num] > 1){
            return num;
        }
    }
    return -1;
}

console.log(findDuplicate(arr))