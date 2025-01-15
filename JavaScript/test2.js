const obj = {
    a:1,
    b:2,
    c:3,
    d:4
}


function reverseValues(obj) {
    let objArr = Object.entries(obj)
    let n = objArr.length;
    
    for(let i = 0; i < n; i++){
        obj[objArr[i][0]] = objArr[n-1-i][1]
    }
    console.log(obj)
}

reverseValues(obj);


//------------------------------------------------

let nums = [4, 6, 10, 9, 13, 21, 3, 5, 6];
const toBeDeleted = [4, 6, 9];

function deleteValues(nums, toBeDeleted) {
    for(let i = 0; i < nums.length; i++){
        if(toBeDeleted.includes(nums[i])){
            nums.splice(i, 1);      //changing original array
            i--;
        }
    }
    return nums;
}

console.log(deleteValues(nums, toBeDeleted))

//---------------Without includes-----------------

function removeElem(nums, toBeDeleted){
    let result = [];
    for(let elem1 of nums){
        let sameElem = false;
        for(let elem2 of toBeDeleted){
            if(elem1 === elem2){
                sameElem = true;
            }
        }
        if(!sameElem){
            result[result.length] = elem1;
        }
    }
    return result;
}

console.log(removeElem(nums, toBeDeleted))


//------------------------------------------------
const arr = [1,2,3,4,5];
//arr.print(); -> 1,2,3,4,5

Array.prototype.print = function() {
    let str = ""
    for(let i = 0; i < this.length; i++){
        if(i == this.length - 1){
            str += this[i];
        } else {
            str += this[i] + ","
        }
    }
    console.log(str);
}

arr.print();

//------------------------------------------------
const str = "Hello how are you?";
// Output: "you? are how Hello"

function reverseStr(s) {
    let strArr = [];
    let word = ""
    
    for(const char of s) {
        if(char == " "){
            strArr[strArr.length] = word;
            word = "";
        } else {
            word += char;
        }
    }
    
    if(word.length > 0){
        strArr[strArr.length] = word;
    }
    
    let result = ""
    for(let i = strArr.length - 1;  i >= 0; i-- ){
        result += strArr[i] + " ";
    }
    
    return result;
}
console.log(reverseStr(str));

//-------------------O(n) Method------------------

function newMethod(s){
    let newStr = "";
    let word = "";
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == " "){
            newStr = word + " " + newStr;
            word = "";
        } else {
            word += s[i];
        }
    }
    
    if(word.length > 0){
        newStr = word + " " + newStr;
    }
    
    return newStr;
}
console.log(newMethod(str))

//----------------------------------------------
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");

function sumPair(arr, target) {
    let coin = arr[0];
    let resArr = [];
    
    for(let i=1; i < arr.length; i++) {
        if(coin < arr[i] && arr[i] <= target){
            coin = arr[i];
        } else {
            break;
        }
    }
    let newTarget = target - coin;
    resArr.push(coin);
    if(newTarget > 0){
          resArr = resArr.concat(
              sumPair(arr, newTarget)
              );
    }
        
    return resArr;
}

let arr3 = [1,2,5,10,20,50,100,1000]
console.log(sumPair(arr3, 1004)) // [1000,2,2]