"use strict";
// for(let i = 0;i<3;i++){
//     setTimeout(()=>console.log(i));
// }
let num;
num = 12;
let str = "abcd";
str = "lmn";
let style;
style = " ";
let color;
function f1(n1, n2) {
    return n1 + n2;
}
// f1(1, "2"); // expected error because of f1 n2 is declared as number-type
function f2(array) {
    return array.reduce((res, curr) => res + curr);
}
function stringNumberAction(strNum) {
    let res;
    if (typeof strNum == "string") {
        res = strNum.length;
    }
    else {
        res = strNum * 2;
    }
    return res;
}
console.log(stringNumberAction(10));
let ar;
ar = [1, 2, 3];
ar = ["1", "g"];
let ar1;
ar1 = [1, "a"];
let someColor;
let someComparator;
someComparator = (n1, n2) => n1 - n2;
someComparator = (f1);
const person = { id: 123, name: "Vasya" };
//hw29
function shiftRound(str, shift = 1) {
    //TODO
    //shift must be any positive number
    //adds shift to ASCII codes of lower case letters
    //if the shifted code will be greater then ASCII code "z"
    //the code should be begun from ASCII code "a"
    //source letter 'a' will be 'c' if "shift" = 2
    //source letter 'z' will be 'b' if "shift" = 2   
    //example  shiftRound("aabx!",4) => ("eefb!") 
    return " ";
}
function unshiftRound(str, shift = 1) {
    //shift must be any positive number
    //subtracts shift to ASCII codes of lower case letters
    //if the shifted code will be greater then ASCII code "z"
    //the code should be begun from ASCII code "a"
    //source letter 'a' will be 'c' if "shift" = 2
    //source letter 'z' will be 'b' if "shift" = 2   
    //example  unshiftRound("eefb!",4) => ("aabx!!") 
    return " ";
}
//# sourceMappingURL=app.js.map