let n = 4;
let str = "";
for(let i = 1; i<=n; i++){
    for(let j = 1; j<=i; j++){
        str+=i+" ";
    }
    for(let j = 1; j<=(2*(n-i)); j++ ){
        str+="  ";
    }
       for(let j = 1; j<=i; j++){
           str+=i+" ";
       } 
        str+="\n"
    }

 
console.log(str)