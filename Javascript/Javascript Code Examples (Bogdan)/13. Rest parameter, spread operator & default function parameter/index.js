// Rest parameter

/*

const sumNumbers = (a, b, ...nums) => {
    console.log(a);
    console.log(b);
    console.log(nums);
};

sumNumbers(1, 2, 3, 4, 5);

*/

/* Note:

1. Rest paremeter will be always last parameter.
2. When you're using rest parameter with arrow function you should always put the 
   rest parameter in paranthesis.
*/


// Spread operator

/*

// Ex 1:

const myGreeting = (name, city, age) => {
    return `Hello from ${name} who is ${age} years old & lives in ${city}`;
};

const myPerson = ["Alice", "Boston", 20];
console.log(myGreeting(...myPerson));

const anotherPerson = ["New York", 25];
console.log(myGreeting("John", ...anotherPerson));


*/

/*


// Ex 2:

const a = [1, 2, 3];
const b = [4, 5];

const c = a.concat(b).concat(6);
console.log(c);

const d = [...a, ...b, 6];
console.log(d);

*/

/*


// Ex 3:

const dateInfo = [2025, 0 , 10];

const date = new Date(...dateInfo);
console.log(date);


*/

/*

// Ex 4:

const myArray = ["a", 5, [], true, {}];

const newArray = [...myArray]; // shallow copy
newArray.push(10);
console.log(newArray);
console.log(myArray); // not mutated becuase we pushed primitive

newArray[2].push(7);
console.log(newArray);
console.log(myArray); // mutated because we pushed 7 in array (oject)

newArray.splice(2, 0, 11);
console.log(newArray);
console.log(myArray); // not mutated because we push primitive


*/

// Ex 5:

/*

const myStr = "Hello World";

const letters = [...myStr];
console.log(letters);
console.log(letters[0]);

const oldLetters = myStr.split("");
console.log(oldLetters);

*/


/*

// Ex 6:

const meanScore = (...args) => {
    if(args.every(score => typeof score === "number")){
        return parseFloat(args.reduce((sum, score) => {
            return (sum + score / args.length);
        }, 0).toFixed(2));

        //return args.reduce((sum, score) => {
            //return (sum + score / args.length);
        //}, 0).toFixed(2); // It outputs result in the form of string value
    }
    else{
        throw new Error(
            "supplied arguments must contaion only numbers"
        );
    } 
};

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];

console.log(meanScore(...scores1, ...scores2));

*/


// Default Function Paremeters


/*

// Ex 1:

const myFunction = (a, b) => {
    return a + b;
}

console.log(myFunction(10, 20));  //10 + 20 = 30

console.log(myFunction(10)); // 10 + undefined = NaN

*/

/*
// Ex 2:

const myFunction = (a, b = 30) => {
    return a + b;
}

console.log(myFunction(10, 20));  // 30

console.log(myFunction(10)); // 40

*/

/*

// Ex 3:

const warning = arg => {
    //console.log(arg);
    console.log(arg !== undefined ? `Function called with only 1 argument please pass another argument`:
                                    `Please pass 2 arguments`
    );
};

const myFunction = (a = warning(), b = warning(a)) => {
    console.log(a);
}

//myFunction(10 , 20);
//myFunction(10);
//myFunction();

*/
