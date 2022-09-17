// Unary operator have single operand/argument
// ex: a++, typeof(), delete obj.a, new Object()

// Binary Operators have two operands/arguments
// ex: a = 5, a + b, a&& b

let a, b;
a = "Kedar";
b = 5;

console.log(a + b); // Kedar5
console.log(a * b); // NaN
console.log(a / b); // NaN
console.log(a - b); // NaN

let c = "1";

console.log(+c); // 1
console.log(Number(c)); // 1

c = undefined;

console.log(+c); // NaN

// Equality Operator

let myString = "0";
let myNumber = 0;
let myBoolean = false;

console.log("________");

console.log(myString == myNumber); // true
console.log(myNumber == myBoolean); // true
console.log(myString == myBoolean) // true

console.log("________");

console.log(myString === myNumber); // false
console.log(myNumber === myBoolean); // false
console.log(myString === myBoolean) // false

console.log("________");

console.log(Number(myString) === myNumber); // true
console.log(myNumber === +myBoolean); // true
console.log(Number(myString) === +myBoolean) // false

console.log("________");

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(0 === "" === null === undefined === false); // true

// When you convert non-empty string to boolean it will return "true"

// AND returns value of the first "falsy" operand

console.log("abc" && 10 && false && "" && "abcd"); // false
console.log("abc" && 10 && NaN && "" && "abcd"); // NaN
console.log("abc" && 10 && "" && "" && "abcd"); // ""

// AND returns value of the last "truthy" operand

console.log("abc" && 10 && true && 123 && "Hello World"); // Hello World

//NOTE:

// Expression --> is a code which produces value.

// Ex: 1. x = 5; 
//     2. 10;
//     3. 1 + "Hello";

// Statement --> is a code which performs an action.

// Ex: 1. var sum;
//     2. for, if etc
//     3. getValue();

// Expression statement --> is a statement with assigned expression

// Ex: 1. const x = 10;
//     2. var c = getValue();