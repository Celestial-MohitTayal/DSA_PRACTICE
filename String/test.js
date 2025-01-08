// Write the program to print following output
// input: 5
// output:
// 1---5---9---13---17
// 2---6---10---14---18
// 3---7---11---15---19
// 4---8---12---16---20
// 5---9---13---17---21

// input = 6
// 1---6---11---16---21---26
// 2---7---12---17---22---27
// 3---8---13---18---23---28
// 4---9---14---19---24---29
// 5---10---15---20---25---30
// 6---11---16---21---26---31

// console.log("Try programiz.pro");

function program(n) {
    let str = "";
    for (let i = 0; i < n; i++){
        let count = i+1;
        for (let j = 0; j < n; j++){
            if( j == n-1){
                str += count;
            } else {
                str += count + "---";
            }
            count = count + n-1;
        }
        str += "\n"
    }
    return str;
}

console.log(program(6))

// function flatArray(arr) {
//     let newArray = [];

//     for(let elem of arr){
//         if(Array.isArray(elem)){
//             newArray = newArray.concat(flatArray(elem));
//         } else {
//             newArray.push(elem);
//         }
//     }

//     return newArray;
// }

// let arr = [1,4,[2,5,3],7,3,[8,4],0]

// console.log(flatArray(arr));

  

// function memoize(fn) {
//     const cache = {}; 
//     return function (...args) {
//       const key = args.join(',');
//       if (key in cache) {
//         console.log(`Fetching from cache: ${key}`);
//         return cache[key];
//       }
//       console.log(`Computing result for: ${key}`);
//       const result = fn(...args);
//       cache[key] = result;
//       return result;
//     };
//   }
  
//   // Fibonacci function (recursive)
//   function fib(n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
//   }
  
//   // Memoized Fibonacci function
//   const memoizedFib = memoize(fib);
  
//   console.log(memoizedFib(10)); // Computes result
//   console.log(memoizedFib(10)); // Fetches from cache
  