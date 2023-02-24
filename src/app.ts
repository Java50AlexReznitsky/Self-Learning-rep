//to deploy watch-mode:
//deploy Git Bash
//in Git Bash type: tsc --watch
//-------------------------------------------------------------

//Strings------------------------------------------------------
const fName: string = 'Jakob';
const sentence: string = `Hello, my name is ${fName}`

//null & undefined types--------------------------------------
//JavaScript
typeof null; //object
typeof undefined //undefined
//TypeScript types:
const u: undefined = undefined;
const n: null = null;

//Void type----------------------------------------------------
//For function result
const greetUser = (): void => {
    console.log("Hello,nice to see you");
}
// const greetUser: void = () => { // expected Type '() => void' is not assignable to type 'void'.
// console.log("Hello,nice to see you");
// }

//Array type---------------------------------------------------
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3]; //Generic type

// Tuple type--------------------------------------------------
//multiple lines
let myTuple: [number, boolean, string] = [12, true, "hello"]
// myTuple = [12, true, "hello", "new string"] // Type '[number, true, string, string]' is not assignable to type '[number, boolean, string]'.
// Source has 4 element(s) but target allows only 3.
myTuple.push("new string")
// console.log(myTuple) //expected [12,true,"hello","new string"]  
let x: [string, number];
x = ["hello", 10]
//one line
let y: [string, number] = ["goodbye", 42];
//error case
// x = [10,"hello"] // expected "Type 'string' is not assignable to type 'number'.","Type 'number' is not assignable to type 'string'."

// Any type-----------------------------------------------------
// Any type of array
let y1: [any, any] = ["goodbye", 42];
let z: Array<any> = [10, "hello", true, undefined, null, NaN];
let notSure: any;
notSure = true;
notSure = 42;
notSure = "Hello";

// Enum type----------------------------------------------------
enum Directions {              // | enum Directions {
    Up,                        // |     Up = 2,                        
    Down,                      // |     Down = 4,
    Left,                      // |     Left = 6,
    Right                      // |     Right
}                // index         | }
Directions.Up    // 0             | Directions.Up    // 2
Directions.Down  // 1             | Directions.Down  // 4
Directions.Left  // 2             | Directions.Left  // 6
Directions.Right // 3             | Directions.Right // 7  <-- since the last initialized index was "6"
Directions[0]    // "Up"          | Direction[6]     // "Left"
Directions[1]    // "Down"        | Direction[7]     // "Right"
Directions[2]    // "Left"
Directions[3]    // "Right"
// Custom name for keys:
enum links {
    youtube = 'https://youtube.com',
    facebook = 'https://facebook.com',
}
// Usage:
links.youtube  // 'https://youtube.com'
links.facebook // 'https://facebook.com'
// without compiling a function in JS
const enum links1 {
    youtube = 'https://youtube.com',
    facebook = 'https://facebook.com',
}
// Usage
const arr = [links1.youtube, links1.facebook];
// Compiled code:
//"use strict";
// const arr = ["https://youtube.com" /* links1.youtube */, "https://facebook.com" /* links1.facebook */];



// Never type
// Function return Error
const msg = "Hello";
const error = (msg: string): never => {
    throw new Error(msg)
}
// function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
};

// Object type-------------------------------------------------
const create = (o: object | null): void => { };
// create(1); //Argument of type 'number' is not assignable to parameter of type 'object'.
// create("42") //Argument of type 'string' is not assignable to parameter of type 'object'.
create({ obj: 1 })

// Multiple types for one value
let id: number | string;
id = 12;
id = "hello";
// id = true; // Type 'boolean' is not assignable to type 'string | number'.

// Type
type Name = string;
let lastName: Name;
lastName = "Smith" // No Error, because type of "Smith" is string
// lastName = 10;     // Type 'number' is not assignable to type 'string'.