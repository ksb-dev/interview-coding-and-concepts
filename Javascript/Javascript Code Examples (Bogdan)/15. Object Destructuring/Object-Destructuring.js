// Destructuring is a JavaScript expression that allows us to extract data from arrays, 
// objects, and maps and set them into new, distinct variables. Destructuring allows us 
// to extract multiple properties, or items, from an array​ at a time.

// Array Destructuring

/*

// Ex 1:

const myArray = [1, 2, 3];


// Without Object Destructuring

let a, b, c;

a = myArray[0];
b = myArray[1];
c = myArray[2];



// With Object Destructuring

//let [a, b, c] = myArray;


console.log(a, b, c);

*/


/*

// Ex 2: More variables than elements in array

const myArray = ["a", "b"];
const [a, b, c] = myArray;

console.log(a, b, c); // a b undefined

*/



/*

// Ex 3:

const myArray = ["a"];
const [a, b, c= "c"] = myArray;

console.log(a, b, c); // a undefined c

*/



/*

// Ex 4: Skip elements during destructuring

const myArray = [1, 2, 3, 4, 5];
const [ , , a, , b = "6"] = myArray;

console.log(a, b); //  space space 3 space 5

*/



/*

// Ex 5: rest  & spread operator in array destructuring

const myArray = [1, 2, 3, 4, 5];
const [a, b, ...c] = myArray; // rest operator

console.log(a, b, c); // 1, 2, [3, 4, 5]

const d = [...c]; // spread operator

console.log(d); // [3, 4, 5]

d.push(6);

console.log(myArray); //    [1, 2, 3, 4, 5]
console.log(c); // [3, 4, 5]
console.log(d); // [3, 4, 5, 6]

*/



/*

// Ex 6: delete first element

let myArray = [1, 2, 3];
const [ , ...myArr] = myArray;

console.log(myArr); // [2, 3]

myArr.shift(); 

console.log(myArr); // []
console.log(myArray); // [1, 2, 3]

*/



/*

// Ex 7: swap values

let x = 5, y = 10;

[y, x] = [x, y];

console.log(x, y); // 10 5

*/



/*

// Ex 8: destructuring in the function

const myPosts = [ ["post 1", 10],["post 2", 20]];

myPosts.forEach(([title, likes]) =>
 console.log(`${title} has ${likes} likes`)
);

*/



/*

// Ex 9: nested array destructuring

const myArray = [1, 2, [3, 4]];
const [a, b, [c, d]] = myArray;

console.log(a, b, c, d);

*/




/*

// Challenges

// 1.

const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
    console.log(minQty);
    console.log(maxQty);
    console.log(defaultQty);

    return maxQty - minQty;
}

const qtRange = [8, 29];

console.log(processQuantities(qtRange));

*/



/*

// 2. 

const minMax = (...numbers) => {
    return[
        numbers.reduce((min, numbers) => numbers < min ? numbers : min),
        numbers.reduce((max, numbers) => numbers > max ? numbers : max),
    ];
};


let min , max;

[min, max] = minMax(24, 5, 34, 10);

console.log(min, max);

*/






// Object Destructuring

/*

// Without destructuring

const myObject = {
    a: 10,
    b: 20
};

const a = myObject.a;
const b = myObject.b;

console.log(a, b); // 10 20

*/

/*

// With destructuring

const myObj = {
    a: 10,
    b: 20
};

const { a: a, b: b} = myObj;

console.log(a, b);// 10 20

*/

// OR

/*
const myObj = {
    a: 10,
    b: 20
};

const {a, b} = myObj;

console.log(a, b);// 10 20

*/



/*

// Destructuring with shorthand property names

const myObj = {
    a: 10,
    b: 20
};

({a, b} = myObj);

console.log(a, b);// 10 20

*/


/*

//NOTE: YOU CAN'T DESTRUCTURE UNDEFINED OR NULL

const val = undefined;
const {a} = val;

console.log(val); // Error

*/

/*

const myArray = [1, 2];
const {a, b} = myArray; // using {} instead of []

console.log(a, b); // undefined undefined because myArray is also an object

*/


/*

// rest operator in object destructuring

const myObject = {
    a: 10,
    b: true,
    c: [],
    d: "abc",
    e: 20
};

const {a, b, ...arg} = myObject;

console.log(a, b, arg); // 10 true {c: Array(0), d: "abc", e: 20}

*/


/*

// Accessing non-existing properties

const myObject = {
    a: 10,
    b: true,
    c: [],
    d: "abc",
    e: 20
};

const {a, b, f} = myObject;

console.log(a, b, f); // 10 true undefined

*/

/*

const myObject = {
    a: 10,
    b: true,
    c: [],
    d: "abc",
    e: 20
};

const {a, b, d = "xyz", f = true} = myObject;

console.log(a, b, d, f); // 10 true abc true (not changed from abc to xyz)

*/


/*

// using new variable names
const myObject = {
    a: 10,
    b: true
};

//const {a: newA, b: newB, c = "default value"} = myObject;

// OR

const {a: newA, b: newB, c: newC = "default value"} = myObject;

//console.log(a, b); // Error
//console.log(newA, newB, c); // 10 true "default value"

console.log(newA, newB, newC); // 10 true "default value"

*/


/*

// Nested object destructuring

const myObject = {
    a: 1,
    b: 2,
    nestedObject: {
        c: 3,
        d: 4
    }
};

const {
    a: a, b:b, nestedObject: {c: c, d: d}
} = myObject

console.log(a, b, c, d); // 1, 2, 3, 4

*/


/*

const personInfo = () => {
    const {name: Fname, age: Age, location: { country: Origin, city: City} } = person;

    return{ Fname, Age, Origin, City}
};

const person = {
    name: "Alice",
    age: 19,
    location: {
        country: "England",
        city: "London"
    }
};

console.log(personInfo(person));


*/


/*

const posts = [
    {
        postId: 234,
        author: "Rob",
        commentsQty: 5
    },
    {
        postId: 823,
        author: "Andy",
    },
    {
        postId: 789,
        author: "Sam",
        commentsQty: 145
    }
];

const processPosts = posts => {
    return posts.map(({postId, author: postAuthor, commentsQty: postCommentsQty = 0}) =>({
        postAuthor,
        postCommentsQty,
        postId: postId + 1000
    }));
}

console.log(posts);

console.log(processPosts(posts));

*/


let person = {
    _id: "12345",
    index: 4,
    processed: false,
    cart: ["item1", "item2", "item3"],
    email: "abc@outlook.com",
    name: "abc",
    cartId: 435
};
{
    let _id, processed, cart;
    ({_id, processed, cart, ...person} = person);
}

console.log(person);
//console.log(_id); // Error