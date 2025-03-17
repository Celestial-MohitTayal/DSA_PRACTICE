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


//-------------------------------------------

let arr = [1,2,3,5];
 function findMissing(arr) {
     let n = arr.length + 1;
     let maxSum = n * (n + 1) / 2;
     let sum = 0;
     
     for(let num of arr) {
         sum += num;
     }
     return maxSum - sum;
 }
 
 console.log(findMissing(arr));