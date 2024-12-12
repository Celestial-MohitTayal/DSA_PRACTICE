function findMissing(arr){
    let value = arr[0];
    for(const num of arr){
        if(value == num){
            value++;
        } else{
            return value;
        }
    }
}


console.log(findMissing([1,2,3,5]));