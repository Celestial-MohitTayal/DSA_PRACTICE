let arr = [7, 10, 4, 3, 20, 15];
let k = 4

function sort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

function findkth(arr, k){
    let sortedArr = sort(arr);
    return `Smallest: ${sortedArr[k-1]} Largest: ${sortedArr[arr.length - k]}` ;
}

console.log(findkth(arr, k));