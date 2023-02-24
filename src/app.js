"use strict";
//to deploy watch-mode:
//deploy Git Bash
//in Git Bash type: tsc --watch
//-------------------------------------------------------------
//Strings------------------------------------------------------
const fName = 'Jakob';
const sentence = `Hello, my name is ${fName}`;
//null & undefined types--------------------------------------
//JavaScript
typeof null; //object
typeof undefined; //undefined
//TypeScript types:
const u = undefined;
const n = null;
//Void type----------------------------------------------------
//For function result
const greetUser = () => {
    console.log("Hello,nice to see you");
};
// const greetUser: void = () => { // expected Type '() => void' is not assignable to type 'void'.
// console.log("Hello,nice to see you");
// }
//Array type---------------------------------------------------
let list = [1, 2, 3];
let list1 = [1, 2, 3]; //Generic type
// Tuple type--------------------------------------------------
//multiple lines
let myTuple = [12, true, "hello"];
// myTuple = [12, true, "hello", "new string"] // Type '[number, true, string, string]' is not assignable to type '[number, boolean, string]'.
// Source has 4 element(s) but target allows only 3.
myTuple.push("new string");
// console.log(myTuple) //expected [12,true,"hello","new string"]  
let x;
x = ["hello", 10];
//one line
let y = ["goodbye", 42];
//error case
// x = [10,"hello"] // expected "Type 'string' is not assignable to type 'number'.","Type 'number' is not assignable to type 'string'."
// Any type-----------------------------------------------------
// Any type of array
let y1 = ["goodbye", 42];
let z = [10, "hello", true, undefined, null, NaN];
let notSure;
notSure = true;
notSure = 42;
notSure = "Hello";
// Enum type----------------------------------------------------
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right"; // |     Right
})(Directions || (Directions = {})); // index         | }
Directions.Up; // 0             | Directions.Up    // 2
Directions.Down; // 1             | Directions.Down  // 4
Directions.Left; // 2             | Directions.Left  // 6
Directions.Right; // 3             | Directions.Right // 7  <-- since the last initialized index was "6"
Directions[0]; // "Up"          | Direction[6]     // "Left"
Directions[1]; // "Down"        | Direction[7]     // "Right"
Directions[2]; // "Left"
Directions[3]; // "Right"
// Custom name for keys:
var links;
(function (links) {
    links["youtube"] = "https://youtube.com";
    links["facebook"] = "https://facebook.com";
})(links || (links = {}));
// Usage:
links.youtube; // 'https://youtube.com'
links.facebook; // 'https://facebook.com'
// Usage
const arr = ["https://youtube.com" /* links1.youtube */, "https://facebook.com" /* links1.facebook */];
// Compiled code:
//"use strict";
// const arr = ["https://youtube.com" /* links1.youtube */, "https://facebook.com" /* links1.facebook */];
// Never type
// Function return Error
const msg = "Hello";
const error = (msg) => {
    throw new Error(msg);
};
// function infinite loop
const infiniteLoop = () => {
    while (true) {
    }
};
// Object type-------------------------------------------------
const create = (o) => { };
// create(1); //Argument of type 'number' is not assignable to parameter of type 'object'.
// create("42") //Argument of type 'string' is not assignable to parameter of type 'object'.
create({ obj: 1 });
// Multiple types for one value
let id;
id = 12;
id = "hello";
let lastName;
lastName = "Smith"; // No Error, because type of "Smith" is string
// lastName = 10;     // Type 'number' is not assignable to type 'string'.
//# sourceMappingURL=app.js.map