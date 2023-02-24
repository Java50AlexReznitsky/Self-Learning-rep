// for(let i = 0;i<3;i++){
//     setTimeout(()=>console.log(i));
// }
let num: number;
num = 12;
let str: string = "abcd";
str = "lmn"
let style: "backgroundColor" | "color" | " ";
style = " ";
let color: "red" | "blue" | "green";
function f1(n1: number, n2: number): number {
    return n1 + n2
}
// f1(1, "2"); // expected error because of f1 n2 is declared as number-type
function f2(array: number[]): number {
    return array.reduce((res, curr) => res + curr);
}
function stringNumberAction(strNum: string | number): number {
    let res: number;
    if (typeof strNum == "string") {
        res = strNum.length;
    } else {
        res = strNum * 2;
    }
    return res;
}
console.log(stringNumberAction(10))
let ar: number[] | string[]
ar = [1, 2, 3]
ar = ["1", "g"]
let ar1: (number | string)[]
ar1 = [1, "a"];
type Color = "red" | "blue" | "green" | "grey" | "yellow";
let someColor: Color;
type Comparator = (num1: number, num2: number) => number;
let someComparator: Comparator;
someComparator = (n1, n2) => n1 - n2;
someComparator = (f1)
type Person = {
    id: number,
    name: string,
    age?: number // ? is not must have
}
const person: Person = { id: 123, name: "Vasya" };
//hw29
function shiftRound(str: string, shift: number = 1): string {
    //TODO
    //shift must be any positive number
    //adds shift to ASCII codes of lower case letters
    //if the shifted code will be greater then ASCII code "z"
    //the code should be begun from ASCII code "a"
    //source letter 'a' will be 'c' if "shift" = 2
    //source letter 'z' will be 'b' if "shift" = 2   
    //example  shiftRound("aabx!",4) => ("eefb!") 
    return " "
}
function unshiftRound(str: string, shift: number = 1): string {
    //shift must be any positive number
    //subtracts shift to ASCII codes of lower case letters
    //if the shifted code will be greater then ASCII code "z"
    //the code should be begun from ASCII code "a"
    //source letter 'a' will be 'c' if "shift" = 2
    //source letter 'z' will be 'b' if "shift" = 2   
    //example  unshiftRound("eefb!",4) => ("aabx!!") 
    return " "
}
