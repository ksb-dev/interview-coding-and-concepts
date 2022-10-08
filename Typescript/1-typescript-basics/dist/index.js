"use strict";
let age = 20;
if (age < 50) {
    age += 10;
}
// tsc --int (configuring typescript compiler)
//console.log(age)
// --> BUILT-IN-TYPES IN TYPESCRIPT
// (includes javascript types also because typescript is built on top of javascript or you can say typescript is superset of javascript)
// 1. any
// 2. unknown
// 3. never
// 4. enum
// 5. tuple
// let sales: number = 123_456_789
// let course: string = 'Typescript'
// let is_published: boolean = true
// let level
// or
let sales = 123456789;
//sales = 'e' // type error
let course = 'Typescript';
let is_published = true;
// ----------------------------------------------------------------
// --> THE ANY TYPE
let level;
level = 1;
level = 'Kedar';
// Note: You can assign number, string ... to a "any" type , but it is against the idea of typescript because we use typescript for type safety
// function render(document) {
//     console.log(document)
// }
// to remove error you can use "document: any" or set noImplicity: false in tsconfig.json file
function render(document) {
    console.log(document);
}
// ----------------------------------------------------------------
// --> ARRAYS
//Note : when you assign empty array to a variable you must mention it's type otherwise compiler will think is is of type "any"
let array = [];
let numberArray = [1, 2, 3]; // type error
numberArray.forEach(n => {
    return n;
    //console.log(n.toString())
});
// ----------------------------------------------------------------
// --> TUPLES
// A tuple is a typed array with a pre-defined length and types for each index.
let user = [5, 'Kedar'];
//user.push(1) // Here compiler doesn't complain (should be solved in near future)
// Note: recommended to restrict length of tuple to 2
// ----------------------------------------------------------------
// --> ENUMS
var Height;
(function (Height) {
    Height[Height["Small"] = 0] = "Small";
    Height[Height["Medium"] = 1] = "Medium";
    Height[Height["Large"] = 2] = "Large";
})(Height || (Height = {}));
let myHeight = Height.Medium;
let mySize = 2 /* Size.Medium */;
//console.log(mySize)
// ----------------------------------------------------------------
// --> FUNCTIONS
function calculateTax1(income, taxYear) {
    //let x
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
//calculateTax1('a', 2022)
//calculateTax1(10_000)
calculateTax1(10000, 2022);
function calculateTax2(income, taxYear) {
    //let x
    if ((taxYear || 2021) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax2(10000);
function calculateTax3(income, taxYear = 2021) {
    //let x
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax3(10000);
calculateTax3(10000, 2020); // This "2020" will override default taxYear value "2021"
/*
"noUnusedParameters": true
"noImplicitReturns": true
"noUnusedLocals": true
*/
// ----------------------------------------------------------------
// --> Objects
let employee1 = { id: 1 };
// If you don't specify name make it optional but that is not recommended
let employee2 = { id: 1, name: 'Kedar' };
employee2.id = 3;
// If you don't want to modify object property id then use readonly
let employee3 = { id: 1, name: 'Kedar' };
//employee3.id = 3
// Adding methods
let employee4 = {
    id: 1,
    name: 'Kedar',
    retire: (date) => {
        console.log(date);
    }
};
let employee5 = {
    id: 1,
    name: 'Kedar',
    retire: (date) => {
        console.log(date);
    }
};
// ----------------------------------------------------------------
// --> UNION TYPES
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
//console.log(customer?.birthday.getFullYear()) // Error
//console.log(customer?.birthday?.getFullYear())
//optional element access operator
//customer?.[0]
// optional call
let log = null;
log === null || log === void 0 ? void 0 : log('a');
// ----------------------------------------------------------------
// --> NULLISH COAELSCING OPERATOR
let speed = null;
let ride = {
    // Falsy(null, undefined, false, '', 0)
    //speed:speed || 30 // if you pass falsy values, it is ignored and speed value becomes 30
    speed: speed !== null && speed !== void 0 ? speed : 30 // here if your value not null or undefined that value will be assigned
};
// ----------------------------------------------------------------
// --> TYPE ASSERTIONS
//let phone = document.getElementById('phone') as HTMLInputElement
// OR
let phone = document.getElementById('phone');
phone.value;
// ----------------------------------------------------------------
// --> THE UNKNOWN TYPE
// function unknown(document: any) {
//   document.move()
//   document.fly()
//   document.whatevetWeWant()
// }
// Here we get error, because of type 'unknown'
// function unknown (document: unknown) {
//   document.move()
//   document.fly()
//   document.whatevetWeWant()
// }
// ----------------------------------------------------------------
// --> THE NEVER TYPE
// function processEvents () {
//   while (true) {
//     // Read message from queue
//   }
// }
// processEvents()
// console.log('Never Reachable Code')
// make "allowUnreachableCode": false
// function processEvents (): never {
//   while (true) {
//     // Read message from queue
//   }
// }
// processEvents()
// console.log('Never Reachable Code')
//# sourceMappingURL=index.js.map