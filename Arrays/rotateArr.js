arr = [1, 2, 3, 4, 5, 6, 7], k = 3 
// → [5, 6, 7, 1, 2, 3, 4]

function rotateArr(arr, k) {
    let n = arr.length
    let newArr = [];
    
    for(let i = n - k; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    
    for(let i = 0; i <= k; i++){
        newArr.push(arr[i]);
    }
    
    return newArr;
}

console.log(rotateArr(arr, k))


//---------------------------------

arr = [1, 2, 3, 4, 5, 6, 7], k = 3 
// → [5, 6, 7, 1, 2, 3, 4]

function reverseArr(arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

function rotateArr(arr, k) {
    let n = arr.length;
    reverseArr(arr, n - k, n-1);
    reverseArr(arr, 0, k);
    reverseArr(arr,0, n-1)
    return arr;
}

console.log(rotateArr(arr, k))