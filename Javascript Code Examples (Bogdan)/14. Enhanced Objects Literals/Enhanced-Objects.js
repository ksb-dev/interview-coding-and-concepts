// Object Literal

/*

// Ex:

let name = "Mike";
let age = 28;

const person = {
    name: name,
    age: age,
    info: function(){
        console.log(`${name} is ${age} years old`);
    }
}

console.log(person);
person.info();

*/

// Enhenced Object Literal

/*

// Ex:

let name = "Mike";
let age = 28;

const person = {
    name,
    age,
    info(){
        console.log(`${name} is ${age} years old`);
    }
}

console.log(person);
person.info();

*/

//Computed Property Names in JavaScript

// Computed Property Names is an ES6 feature which allows the names of object properties in
// JavaScript object literal notation to be determined dynamically, i.e. computed.



const myPropertyName = 'c'

const myObject = {
  a: 5,
  b: 10,
  [myPropertyName]: 15
} 

console.log(myObject.c) // prints 15