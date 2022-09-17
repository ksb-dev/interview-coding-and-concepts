/*"use Strict";

const x = 10; // Global scope

function myFn(){
    let x = 10; // Local Scope
    var y = 5;
    x = 20;
    console.log(x); // 20
}

myFn();

console.log(x); // 10
//console.log(y); // error */

/* Note: 
 Variables declared with "let" & "const" inside of the
 block are limited to the scope of the block
 */ 

 let a = 10;
 const b = 20;
 var c = 30

 function myFn(a){
     console.log(a);
     console.log(b);
     console.log(c);
 }

 myFn(); // undefined, 20, 30
 myFn(40); // 40, 20 , 30

