/*// Mutable

var a = 10;
a = 20;
console.log(a); // 20

let b = 10;
b = 20;
console.log(b); // 20

let e = false;
e = true;
console.log(e); // true

const obj = {};
console.log(obj); // {}
obj.propA = true;
console.log(obj); // {propA: true}


console.log("-----------------------");

// Immutable

const c = 10;
//c = 20;
console.log(c); // Error

let d = "abc";
d[2] = d;
console.log(d); // abc


console.log("-----------------------");

// typeof

console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof abc); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object

console.log("-----------------------");

// instanceof

const f = [];

console.log(f instanceof Array); // true
console.log(f instanceof Object); // true


console.log("-----------------------");


// new Array()

const array = [1, 2, 3];
const array2 = [1, 2, 3];

console.log(array); // (3)[1, 2, 3]
console.log(array instanceof Array); // true
console.log(array instanceof Object); // true

console.log("-----------------------");

const array1 = new Array(1, 2, 3);

console.log(array1); // (3)[1, 2, 3]
console.log(array1 instanceof Array); // true
console.log(array1 instanceof Object); // true

console.log("-----------------------");

console.log(array == array1); // false
console.log(array === array1); // false
console.log(array === array2); // false


console.log("-----------------------");

// new String()

const myString = "abc";
const myString2 = "abc";

console.log(myString); // abc
console.log(typeof myString); // string
console.log(myString instanceof Object); // false
console.log(myString instanceof String); // false

console.log("-----------------------");

const myString1 = new String("abc");

console.log(myString1); // String {"abc"}
console.log(typeof myString1); // Object
console.log(myString1 instanceof Object); // true
console.log(myString1 instanceof String); // true

console.log("-----------------------");

console.log(myString == myString2); // true
console.log(myString === myString2); // true

console.log(myString1 == myString2); // true
console.log(myString1 === myString2); // false

*/

// this

/*
"use strict";

console.log(this); // Window {...}

console.log(this == window); // true


function myFunction(){
    console.log(this);
}

myFunction(); // "this" is undefined in strict mode

window.myFunction(); // "this" is equal to window in strict mode

console.log("-----------------------");

const myObject = {
    name: "Kear",
    age: 28,
    greeting: function(){
        console.log(this); // {name: "kedar, age: 28", greeeting: f} because this refers to 
                           // whole object
        console.log(this.name);
    }
}

myObject.greeting();

*/



// call()

// functionName.call(thisArg, arg1, arg2, ...);


// In JavaScript all functions are object methods.
// If a function is not a method of a JavaScript object, it is a function of the global object 
// With the call() method, you can write a method/function that can be used on different objects.

/*
function myFunction(a, b){
    console.log(this);
}

const myObject = {
    a: 10,
    b: null
}

myFunction.call(myObject);

console.log("---------------------------");
*/

/*
// With call(), an object can use a method belonging to another object.

var person = {
    fullName: function() {
       console.log(this.firstName + " " + this.lastName);
       //console.log(firstName + " " + lastName); // Error
    }
}

var person1 = {
 firstName:"John",
 lastName: "Doe"
}

person.fullName(); // undefined undefined
person.fullName.call(person1); // John Doe

console.log("---------------------------");
*/

/*
// The call() method can accept arguments


var person = {
    fullName: function(a, b) {
       console.log(this.firstName + " " + this.lastName);
       console.log(a + b);
    }
}

var person1 = {
 firstName:"John",
 lastName: "Doe"
}

person.fullName.call(person1, 10, 20); // John Doe
                                       // 30

console.log("---------------------------");

*/


// apply()

// fn.apply(thisArg, [args]);

/*
var person = {
    fullName: function(a, b) {
       console.log(this.firstName + " " + this.lastName);
       console.log(a + b);
    }
}

var person1 = {
 firstName:"John",
 lastName: "Doe"
}

person.fullName.apply(person1, [10, 20]); // John Doe
                                          // 30

// Note: Diifference between call() & apply() is in apply() we need to pass an array of arument
console.log("---------------------------");

*/


/*

// bind()

// It doesn't immediately call the function instead it generates the copy of function
// so we can store it & use whenever we want.
// It is useful to create a function with preset arguments.

function myFunction(a, b){
    console.log(this);
    console.log(a + b)
}

const myObject = {
    a: 10,
    b: null
}

var fn = myFunction.bind(myObject, 10, 20); // preset "this" & both arguments
fn();

function myFunction1(a, b){
    console.log(this);
    console.log(a + b)
}

const myObject1 = {
    a: 10,
    b: null
}

var fn1 = myFunction1.bind(myObject1); // preset only "this"
fn1(10, 20); // pass remaining arguments

*/



/*

// Pass by value

// If variable that holds primitive value type is passed to the function as argument,
// it's value can't be change inside of the function.

function fn(arg){
    arg = 20;
    return arg;
}

const a = 10;

console.log(fn(a)); // 20
console.log(a); // 10


// Pass by reference

const arr = [1, 2, 3];

function fn1(a){
    a.push(4);
    return a;
}

console.log(fn1(arr)); // [1, 2, 3, 4]
console.log(arr); // [1, 2, 3, 4]

*/


/*

// IIFE (Immediately invoked function expression)

// The common advantage of IIFE is that any "Function or Variable" defined inside IIFE, 
// cannot be accessed outside the IIFE block, thus preventing global scope from getting 
// polluted. Also helps us manage memory in an efficient manner.

(function(a, b){
    console.log(a + b);
})(10, 20);

*/



// Closures

// A closure is the combination of an inner function and variables defined at outer scope
// but accessible to inner function. In other words, a closure is an inner function that 
// can access outer function’s variables

function outerFn(arg){
    const a = arg
    return function innerFn(b){
         console.log(a + b); // 30
         return a + b;

         console.log("Hi"); // not reachable
    }

    return innerFn;
}

const result = outerFn(10);
console.log(result); // f innerFn(b){...}
console.log(result(20)); // 30 if we not comment "retutn a + b" or we'll get "undefined"

//console.log(outerFn(20)(30));

