// The function is a block of organized code, reusable code.
// Function can be
// 1. a variable with a value
// 2. assigned as a value to the other variable
// 3. anonymous
// 4. used as argument in the call to the other function

// Note: Function is an object in Javascript

// 1. Function without parameter

function myFunction(){

}

const result = myFunction();

console.log(myFunction);
console.log(myFunction()); // undefined
console.log(result);// undefined
console.log(myFunction(10, true));// undefined

// 2. Function with parameter

function myFunction1(a, b){
    console.log(a);
    console.log(b);
}

myFunction1(10, 5);// 10, 5
myFunction1(true, null);// true, null
myFunction1("Kedar");// Kedar, undefined

console.log(myFunction1(20, 30)); // 20, 30, undefined (Because of no "return")

// 3. Function scope

function myFunction2(e, f){
    let c = e + f;

    console.log(c);
}

myFunction2(4, 6); 

//console.lob(c); // Reference error
//console.log(e); // Reference error

// 4. Function with return

function myFunction3(a, b){
    return a + b;

    console.log(a); // This will not print because function execution stops after "return" statement
}

console.log(myFunction3(2, 5)); // 7
console.log(myFunction3()); // NaN

// 5. Function Declaration   vs   Function Expression

//       Has name                     Has no name
//  Can be used as standalone     Can't be used as standalone




let i = 1;
const myInterval = setInterval(function(){
    console.log(i);
    i = i + 1;
}, 2000);

setTimeout(function(){
    clearInterval(myInterval);
}, 10000)