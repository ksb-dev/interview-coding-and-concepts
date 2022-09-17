/* 

1. for loop

syntax :

for(Initial Statement; Condition; Iteration Action){
    Code that executes on each iteration
}

*/

// Ex:

for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log("-----");

const myArray = [0, true, "abc", null]

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

console.log("-----");


/*

2. while loop

syntax :

while(Condition){
    Code that executes on each iteration
}

*/

// Ex:

let i = 0;

while(i < 5){
    console.log(i);
    i++;
}

console.log("-----");


/*

3. do-while loop

syntax :

do{
    Code That executes on each iteration 
}while(Condition);

*/

// Ex:

let j = 0;

do{
    console.log(j);
    j++;
}while(j < 5);


console.log("-----");


/*

4. for-in loop

syntax :

for(key in Object){
    Specific code executs
}

*/

const myObj = {
    a : "abc",
    b : true,
    c : null,
    d : 150
}

for(let key in myObj){
    console.log(key, myObj[key]);
    //console.log(myObj.b);
}

console.log("-------------------------------------------");

const myObj1 = {
    a : "abc",
    b : true,
    c : null,
    d : 150
}

Object.prototype.globalProp = "Inherited property";

for(let key in myObj1){
    console.log(key, myObj1[key]);
}

console.log("---------------------------------------------");

const arr = [true, {}, {}, 10];

Array.prototype.globalprop = "Global array property";

for(let key in arr){
    console.log(key, arr[key]);
}

console.log("---------------------------------------------");


/*

5. for-of loop

syntax :

for(Element of Iterable){
    Specific code executes
}

*/

// Ex:

const arr2 = [10, "abc", true];

for(let key of arr2){
    console.log(key);
}


console.log("---------------------------------------------");

const arr3 = [
    {
        name: "Mike",
        age: 30
    },
    {
        name: "Paul",
        age: 35
    },
    {
        name: "John",
        age: 20
    }
];

for(let key of arr3){
    console.log(key, arr3[key], key.name);
}


console.log("---------------------------------------------");


/*

        for-in                             vs                             for-of

1. Iterates over all enumerable                          1. Iterates over all iterable elements          
   Objects.
   
2. Iterates also over inherited                          2. Iterates only over own values
   properties defined in the
   prototype

3. Can be used with Objects.                             3. Can't be used with objects.


*/
