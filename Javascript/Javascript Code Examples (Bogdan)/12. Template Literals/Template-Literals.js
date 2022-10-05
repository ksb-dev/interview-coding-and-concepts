const myNumber = 10;
const myBoolean = true;
const myString = "Logitech";
const myObject = {name: "Kedar"};
const myArray = [2, 4, 6, 8, 10];

const result = 
"\n Number is "+ 
 myNumber + 
 "\n\n Boolean is "+ 
 myBoolean +
"\n\n String is "+ 
 myString + 
"\n\n Object is "+ 
 myObject + 
"\n\n Array is "+
 myArray;

console.log(result);

// Template Literals

const result1 = 
`\n Number is ${myNumber} 
 \n Boolean is ${myBoolean} 
 \n String is ${myString} 
 \n Object is ${myObject} 
 \n Array is ${myArray}`;

console.log(result1);

