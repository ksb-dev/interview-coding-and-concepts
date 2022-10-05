// JAVASCRIPT IS "DYNAMICALLY TYPED" LANGUAGE

// 1. Variable is one which holds a value & value has a type (Primitive / Reference)

// Primitive value types

// 1. Null
// 2. Undefined
// 3. Number
// 4. String
// 5. Boolean
// 6. Symbol

// Reference value type

// There is only one reference type & that is "Object"

// 2. You can declare variables using var, let & const (let & const are introduced in ES6)

// let a; --> Variable declaration
// const c = 10; Variable declaration & assignment

// 3. You can reassign values to var & let but not for const

/*
var a = 10;
a = 20
console.log(a); // 20

let b = 10;
b = 20
console.log(b);

const c = 10; // 20
c = 20
console.log(c); // Error
*/

// 4. If you try to access variable that is undeclared / declared later using "let" or "const"
//    you will get following error - ReferenceError : Variable is not defined.

//console.log(d);
//console.log(e);

//let e = 10;

// 5. If you try to access a variable that is declared but not assigned a value using "var" or "let"
//    its value will be automatically set bto "undefined".

/*let f;
var g;
console.log(f);
console.log(g);*/

// 6. You can't declare identifier with same name more than once

/*var kd;
let kd;
console.log(kd);*/

