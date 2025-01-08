//REVERSE WORDS OF THE STRING
var str = "Saare jahan se achha hindustan hmara";

var savedStrArray = str.split(" ").map((word) => {
  return word.split("").reverse().join("");
});

console.log(savedStrArray.join(" "));
console.log("---------------------------------------------");

//CHECK WHETHER THE INPUT IS ARRAY OR NOT
function checkArray(elem) {
  return Array.isArray(elem);
}

console.log(checkArray([]));
console.log(checkArray({}));
console.log("---------------------------------------------");

//HOW TO EMPTY AND ARRAY IN JS -
// do not reset it to a new array, do not loop through to pop each value
var arr = [1, 2, 3, 4, 5, 6];
arr.length = 0;
console.log(arr);
console.log("---------------------------------------------");

//HOW WOULD YOU CHECK IF A NUMBER IS AN INTEGER
var num = 12;
console.log(Number.isInteger(num)); //Direct Way
//------------------
if (num % 1 === 0) {
  console.log("integer");
} else {
  console.log("not integer");
}
console.log("---------------------------------------------");

//MAKE THIS DUPLICATE - duplicate([1,2,3,4,5]) => [1,2,3,4,5,1,2,3,4,5]
function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));
console.log("---------------------------------------------");

//WRITE A JS FUNCTION WHICH REVERSE A NUMBER
function reverseNum(num) {
  return Number(num.toString().split("").reverse().join(""));
}
//----------------------
function reverseNum1(num) {
  var rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reverseNum(123));
console.log(reverseNum1(1234));
console.log("---------------------------------------------");

//WRITE A FUNCTION TO CHECK WHETHER THE STRING IS PALINDROME OR NOT
function strPalChecker(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
//---------------------
function strPalChecker1(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str;
}

console.log(strPalChecker("madam"));
console.log(strPalChecker1("sir"));
console.log("---------------------------------------------");

//WRITE A JS FUNCTION THAT RETURNS A PASSED STRING WITH LETTERS IN ALPHABETICAL ORDER
function strAlphOrd(str) {
  return str.split("").sort().join("");
}

console.log(strAlphOrd("apple"));
console.log("---------------------------------------------");

//WRITE A JS FUNC THAT ACCEPTS A STR AS A PARAMETER AND CONVERTS TEH FIRST LETTER OF EACH WORD OF THE STRING IN UPPERCASE
//mohit bha kasie ho
//Mohit Bhai Kasie Ho

function capitalizeKaro(str) {
  const newStr = str.split(" ").map((e) => {
    return e.charAt(0).toUpperCase() + e.substring(1);
  });
  return newStr.join(" ");
}

console.log(capitalizeKaro("mohit bhai kasie ho"));
console.log("---------------------------------------------");

//WRITE A JS FUNCTION TO GET THE NUMBER OF OCCURENCES OF EACH LETTER IN SPECIFIED STRING
function numOcc(str) {
  var occ = {};
  str.split("").forEach((element) => {
    if (!occ.hasOwnProperty(element)) {
      occ[element] = 1;
    } else {
      occ[element]++;
    }
  });
  return occ;
}
console.log(numOcc("Mohit"));
console.log("---------------------------------------------");

//LOOP AN ARRAY AND ADD ALL ELEMENTS OF IT
function sumArr(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArr([1, 2, 3, 4]));
console.log("---------------------------------------------");

//LOOP AN ARRAY OF OBJECT REMOVE ALL OBJECTS IN WHICH GENDER IS MALE
var arr = [
  {
    name: "Mohit",
    gender: "Male",
  },
  {
    name: "Rohit",
    gender: "Male",
  },
  {
    name: "Shivangi",
    gender: "Female",
  },
  {
    name: "Mahima",
    gender: "Female",
  },
];

var newArr = arr.filter(function (elem) {
  return elem.gender === "Male";
});
//---------------
let count = 0;
arr.forEach((elem) => {
  if (elem.gender !== "Male") count++;
});
for (let j = 1; j < count; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "Male") {
      arr.splice(i, 1);
    //   break;
    }
  }
}

console.log(newArr);
console.log(arr);
console.log("---------------------------------------------");
