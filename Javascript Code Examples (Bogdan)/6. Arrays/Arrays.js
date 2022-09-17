// Array is an object & a data structure which
// can hold 0 or more different data types.

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);

// push(obj);
myArray.push(10);
console.log(myArray);

// pop()
myArray.pop();
console.log(myArray);

// unshift(obj)
myArray.unshift(6);
console.log(myArray);

// shift()
myArray.shift();
console.log(myArray);

const myArray1 = [{}];
console.log(myArray1);

myArray1[1] = 10;
console.log(myArray1);

// Important
myArray1[3] = 20;
console.log(myArray1); // [{}, 10, empty, 20]

myArray1[0].a = 50;
console.log(myArray1[0].a); // 50

// delete

delete myArray1[0];
console.log(myArray1); // [empty, 10, empty, 20]

// Important
delete myArray1[2];
console.log(myArray1); // [empty, 10, empty, 20]

myArray1.pop();
console.log(myArray1); // [empty, 10, empty]

myArray1.pop();
console.log(myArray1); // [empty, 10]

// COMPARISION

const Arr1 = [1, 2, 3];
const Arr2 = [1, 2, 3];

console.log(Arr1 === Arr2);

// Important
console.log(Arr1.toString() === Arr2.toString());










