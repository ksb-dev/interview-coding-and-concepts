// 1. forEach()

/* Syntax:

array.forEach(callback(element, index, arr), thisValue)

Parameters: This method accepts five parameters as mentioned above and described below:

callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the current value element in the
       array starting from 0.

array: This parameter is optional, it holds the complete array on which Array.every is called.

thisArg: This parameter is optional, it holds the context to be passed as this to be used 
         while executing the callback function. If the context is passed, it will be used 
         like this for each invocation of the callback function, otherwise undefined is used 
         as default.

Return value: The return value of this method is always undefined. This method may or may not
              change the original array provided as it depends upon the functionality of the 
              argument function.         

*/


/*


// Ex 1:

const arr1 = [1, true, "abc"];

arr1.forEach(function(element){
    console.log(element);
});

// or (using "Arrow Function")

arr1.forEach(element => {
    console.log(element);
});

*/


/*

//Ex 2:

const myCities = ["London", "New York", "Singapore"];

const myFunction = (element, index) => element + " is located at the index " + 
                                       index + " in teh myCities array";


for(let i = 0; i < myCities.length; i++){
    console.log(myFunction(myCities[i], i));
}


myCities.forEach((element, i) => 
    console.log(myFunction(element, i))
); 

*/




// map()

// The arr.map() method creates a new array with the results of called function for 
// every array element

/* Syntax:

array.map(callback(element, index, arr), thisArg)

Parameters: This method accepts five parameters as mentioned above and described below:

callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the currentValue element in the array starting from 0.

arr: This parameter is optional, it holds the complete array on which Array.every is called.

thisArg: This parameter is optional, it holds the context to be passed as this to be used 
         while executing the callback function. If the context is passed, it will be used 
         like this for each invocation of the callback function, otherwise undefined is used
         as default.

Return Value: It returns a new array and elements of arrays are result of callback function.

*/


/*

// Ex 1:

const myNumbers = [1, 5, 7];

// using for loop

let mySquareNumbers = [];

for(let i = 0; i < myNumbers.length; i++){
    mySquareNumbers.push(myNumbers[i] * myNumbers[i]);
}

console.log(mySquareNumbers);

// using map()

console.log(myNumbers.map((element, index) => {
    return element * element;
}));

console.log(myNumbers);


*/




// filter()

// The arr.filter() method is used to create a new array from a given array consisting 
// of only those elements from the given array which satisfy a condition set by the 
// argument method. 

/*

Syntax:

array.filter(callback(element, index, arr), thisValue)

Parameters: This method accepts five parameter as mentioned above and described below: 
 
callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the currentValue element in the 
       array starting from 0.

arr: This parameter is optional, it holds the complete array on which Array.every is called.

thisValue: This parameter is optional, it holds the context to be passed as this to be used 
           while executing the callback function. If the context is passed, it will be used like this 
           for each invocation of the callback function, otherwise undefined is used as default.

Return value: This method returns a new array consisting of only those elements that satisfied the 
              condition of the arg_function.  

*/


/*

// Ex 1:

const myNumbers = [10, 25, 56, 3, 8];

// using for loop

const filteredNumbers = [];

for(let i = 0; i < myNumbers.length; i++){
    if(myNumbers[i] > 10){
        filteredNumbers.push(myNumbers[i]);
    }   
}

console.log(filteredNumbers);


// using filter()

console.log(myNumbers.filter(num =>{
    return num > 10;
}));

*/




// find()

// The arr.find() method is used to get the value of the first element in the array 
// that satisfies the provided condition. It checks all the elements of the array and 
// whichever the first element satisfies the condition is going to print.

/*

Syntax:

array.find(callback(element, index, arr),thisValue)

Parameters: This method accepts five parameters as mentioned above and described below:

callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: It is an optional parameter that holds the index of current element.

arr: It is an optional parameter that holds the array object the current element belongs to.

thisValue: This parameter is optional, if a value to be passed to the function to be used 
           as its “this” value else the value “undefined” will be passed as its “this” value.

Return value: It returns the array element value, if any of the elements in the array which 
              satisfy the condition, otherwise it returns undefined. 

*/

/*

// Ex 1:

const myArray = [10, [], {}, "abc", true];

console.log(myArray.find(element => {
    return typeof element === "object";
}));

// Ex 2:

const posts = [
    {postId: 1355, comments: 5},
    {postId: 5131, comments: 8},
    {postId: 6134, comments: 2},
];

const findSinglePost = (postId, posts) => {
    return posts.find(post => post.postId === postId);
}

console.log(findSinglePost(6134, posts));

*/




// every()

// The arr.every() method checks whether all the elements of the array satisfy the given 
// condition or not that is provided by a method passed to it as the argument.

/*

Syntax:

arr.every(callback(element[, index[, array]])[, thisArg])

Parameters: This method accepts five parameters as mentioned above and described below:

callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the currentValue element in the 
       array starting from 0.
array: This parameter is optional, it holds the complete array on which Array.every is called.

thisArg: This parameter is optional, it holds the context to be passed as this to be used 
         while executing the callback function. If the context is passed, it will be used 
         like this for each invocation of the callback function, otherwise undefined is used 
         as default.

Return value: This method returns Boolean value true if all the elements of the array follow 
              the condition implemented by the argument method. If one of the elements of the
              array does not satisfy the argument method, then this method returns false.         

*/

/*

// Ex 1:

const myNumbers = [0, 2, 4, 6, 10];

console.log(myNumbers.every((element) => {
    return (element % 2) === 0;
}));

*/




// some()

// The arr.some() method checks whether at least one of the elements of the array satisfies
// the condition checked by the argument method.

/*

Syntax:

arr.every(callback(element[, index[, array]])[, thisArg])

Parameters: This method accepts five parameters as mentioned above and described below:

callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the currentValue element in the array starting from 0.

array: This parameter is optional, it holds the complete array on which Array.every is called.

thisArg: This parameter is optional, it holds the context to be passed as this to be used 
         while executing the callback function. If the context is passed, it will be used  
         like this for each invocation of the callback function, otherwise undefined is used
         as default.

Return value: This method returns true even if one of the elements of the array satisfies 
              the condition(and does not check the remaining values) implemented by the 
              argument method. If no element of the array satisfies the condition then it 
              returns false         

*/

/*

// Ex 1:

const arr = [ 2, "true", 10, true];

console.log(arr.some(element => {
    return typeof element === "boolean";
}));

*/





// includes()

// The array.includes() method is used to know either a particular element is present in 
// the array or not and accordingly, it returns true or false i.e, if the element is present, then it returns true otherwise false.

/*

Syntax:

array.includes(searchElement, start)

Parameter: This method accepts two parameters as mentioned above and described below:

searchElement: This parameter holds the element which will be searched.

start: This parameter is optional and it holds the starting point of the array, 
where to begin the search the default value is 0.

Return Value: It returns a Boolean value i.e, either True or False.

*/

/*

// Ex 1:

const arr = [10, true, "abc", null, undefined];

console.log(arr.includes(true));
console.log(arr.includes(true, 2));

*/




// reduce()

// The arr.reduce() method in JavaScript is used to reduce the array to a single value 
// and executes a provided function for each value of the array (from left-to-right) and 
// the return value of the function is stored in an accumulator.

/*

Syntax:

array.reduce( function(total, currentValue, currentIndex, arr), 
initialValue )

Parameter: This method accepts five parameters as mentioned above and described below:

function(accumulator, currentValue, index, arr): It is the required parameter and used to run 
                                           for each element of array. It contains four 
                                           parameter which are listed below:

accumulator: It is required parameter and used to specify the initialValue, or the previously 
             returned value of the function.

currentValue: It is required parameter and used to specify the value of the current element. 

currentIndex: It is optional parameter and used to specify the array index of the current 
              element.

arr: It is optional parameter and used to specify the array object the current element belongs to.

initialValue: It is optional parameter and used to specify the value to be passed to the 
              function as the initial value.

*/

/*

// Ex 1: Using for loop

let value = 0;

const numbers = [5, 10, 15];

for(let i = 0; i < numbers.length; i++) {
  value += numbers[i];
}

console.log(value);


// Using reduce()

const myNumbers = [5, 10, 3, 15];

const sum = myNumbers.reduce((accumulator, currentValue) => {
    //console.log(accumulator);
    //console.log(currentValue);

    return accumulator + currentValue;
});

console.log(sum);

*/


/*

// Ex 2:

const persons = [
    {
        name: "Veronoca",
        age: 25
    },
    {
        name: "John",
        age: 23
    },
    {
        name: "Moises",
        age: 28
    }
];

const personNames = persons.reduce((accumulator, currentValue) =>{
    //console.log(accumulator);
    //console.log(currentValue);
    
    accumulator.push(currentValue.name);
    
    return accumulator;
}, []);

console.log(personNames);

*/

/*

// Ex 3:

const fruits = ["banana", "orange", "apple", "apple", "orange", "mango"];

const uniqueFruits = fruits.reduce((accumulator, currentValue) =>{
    //console.log(accumulator);
    //console.log(currentValue);

    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue);
    }
    
    return accumulator;

}, []);

console.log(uniqueFruits);


*/





// sort()

const arr = ["Banana", "apple", "banana", "Orange", "mango"];

console.log(arr.sort()); //  ["Banana", "Orange", "apple", "banana", "mango"]


const arr1 = [10, 1, 0, 50, 8, 7, 80];

console.log(arr1.sort()); // [0, 1, 10, 50, 7, 8, 80]
console.log(arr1.sort((a, b) => a - b)); // Ascending order
console.log(arr1.sort((a, b) => b - a)); // Descending order


