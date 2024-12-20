//https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    let result = 0;

    for(let i = 0; i < s.length; i++){
        let roman = s[i];
        let roman1 = s[i] + s[i+1]
        if(roman == 'I' || roman1 == 'IV' || roman1 == 'IX'){
            if(roman1 == 'IV'){
                result += 4;
                i++;
            } else if(roman1 == 'IX'){
                result += 9;
                i++;
            } else {
            result += 1; 
            }
        } else if(roman == 'V'){
            result += 5; 
        } else if(roman == 'X' || roman1 == 'XL' || roman1 == 'XC'){
            if(roman1 == 'XL'){
                result += 40;
                i++;
            } else if(roman1 == 'XC'){
                result += 90;
                i++;
            } else {
            result += 10; 
            }
        } else if(roman == 'L'){
            result += 50; 
        } else if(roman == 'C'|| roman1 == 'CD' || roman1 == 'CM'){
            if(roman1 == 'CD'){
                result += 400;
                i++;
            } else if(roman1 == 'CM'){
                result += 900;
                i++;
            } else {
            result += 100; 
            }   
        } else if(roman == 'D'){
            result += 500; 
        } else if(roman == 'M'){
            result += 1000; 
        }
    }

    return result;
};