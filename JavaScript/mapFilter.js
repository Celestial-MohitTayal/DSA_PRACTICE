
Array.prototype.myMap = function(fn) {
    let arr = [];
    for(let num of this){
        arr.push(fn(num));
    }
    return arr;
}

const arr = [1,2,3];
const arr1 = arr.myMap((n) => n*2);

console.log(arr1);


//------------------------------

Array.prototype.myFilter = function(fn) {
    let arr = [];
    for(let num of this){
    if(fn(num)){
        arr.push(num);
    }
    }
    return arr;
}

const arr2 = arr.myFilter((n) => n>1);

console.log(arr2);