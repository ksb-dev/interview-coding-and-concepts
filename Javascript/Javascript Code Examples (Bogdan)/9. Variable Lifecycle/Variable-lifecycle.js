/*

// Scopes

// 1.Global Scope

var a;

// 2.Function Scope

function fn(){
    var b;
}

// 3. Block Scope

{
    var c;
}

*/




/*

// var

// 1. Global Scope

var a = 10;
console.log(a); // 10

// 2. Function Scope

function fn(){
    var b = 20;
}
//console.log(b); // Error

// 3. Block Scope

function fn1(){
    var arr = [1, 2, 3];
     for (let key in arr){
         console.log(key);
     }
     // console.log(key); // Error
}
fn1();

{
    var d = 50;
}
console.log(d); // 50

// 4. Reassignment

var d = 10;
d = 20;

function fn2(){
    var d = 40;
    console.log(d); // 40
} 
fn2();
console.log(d); // 20


// 5. Redeclaration

var e = 10;
var e = 40;
console.log(e); // 40

// 6. Hoisting

f = 70;
var f;

console.log(f); // 70


*/


/*


// let

// 1. Global Scope

let a = 10;
console.log(a); // 10

// 2. Function Scope

function fn(){
    let b = 20;
}
//console.log(b); // Error

// 3. Block Scope

function fn1(){
    let arr = [1, 2, 3];
     for (let key in arr){
         console.log(key);
     }
     // console.log(key); // Error
}
fn1();

{
    let d = 50;
}
//console.log(d); // Error


// 4. Reassignment

let d = 10;
d = 20;

function fn2(){
    let d = 40;
    console.log(d); // 40
} 
fn2();
console.log(d); 


// 5. Redeclaration

let e = false;
// let e = true; // Error

console.log(e);


// 6. Hoisting

f = 30;
//let f;

//console.log(f);

*/




/*

// const

// It's scope is same as let except the following

// You can't reassign value to const
const a = 10;
//a = 10;

console.log(a);

const arr = [1, 2, 3];
arr.push(4); // It is not reassigning

console.log(arr);


// You should initialize const at the time of declaration


//const b;

//console.log(b);


// Hoisting is not applicable to const because you should initialize it at the time of 
// declaration otherwise we'll get an error.


*/


// Note :

// var --> For variables that are used across entire code.

// let --> For temporary variables that are limited to block scope.

// const --> For variables that shouldn't be reassigned/ changed.




// Javascript Engine Phases

// 1. Compilation --> Create object with all variales.
// 2. Execution --> Execute code line by line.


//variable lifecyccle phases

// 1. Declaration
// 2. Initialization
// 3. Assignment