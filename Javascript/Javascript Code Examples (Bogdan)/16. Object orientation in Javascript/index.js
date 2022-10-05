/* 4 pillars of Object oriented programming

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

*/

// 1. Encapsulation

// Encapsulation is the binding of data and the methods that act on that data such 
// that access to that data is restricted from outside.


/*


// Ex:

let employee = {
    Id: 2,
    post: "Manager",
    salary: 30_000,
    getDetails: function() {
        return this.Id +" "+ this.post+" "+ this.salary;
    }
    
};

console.log(employee.getDetails());
*/


/* Advantages

1. Encapsulation guards an object against illegal access.
2. Encapsulation helps to achieve a level without revealing its complex details.
3. This will reduce human errors.
4. Make the application more flexible and manageable.
5. Simplifies the application.

*/



// 2. Abstraction

// The JavaScript abstraction is basically a process of hiding the implementation 
// details and displaying only the functionality to all the users

// Ex:

// Advantages

/*
1. Avoids code duplication and increases reusability.
2. Can change internal implementation of class independently without affecting the user.
3. Helps to increase security of an application or program as only important details 
   are provided to the user.
*/




// 3. Inheritance

// Inheritance refers to an object's ability to access methods and other properties 
// from another object.

// Ex:

// Advantages

/*
1. Inheritance promotes reusability. 
2. Reusability enhances reliability.
3. As the existing code is reused, it leads to less development and maintenance costs.
*/




// 4. Polymorphism

// The polymorphism is a core concept of an object-oriented paradigm that provides 
// a way to perform a single action in different forms. It provides an ability to call 
// the same method on different JavaScript objects.

// Ex:

// ----------------------------------------------------------------------------------------

// OBJECTS

/*
// Object Literals

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log("draw");
    }
};

circle.draw();
*/


// Factory Function

// A factory function is any function which is not a class or constructor that 
// returns a (presumably new) object. In JavaScript, any function can return an object. 
// When it does so without the new keyword, it’s a factory function.

/*

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log("draw " + radius);
        }
    };
};

const circle = createCircle(1);
circle .draw();

*/


// Constructor Function

// In JavaScript, any function can return an object. 
// When it does so with the new keyword, it’s a constructor function.


/*


function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.draw = function() {
        console.log("draw " + radius);
    }
}

const another = new Circle(1); // Circle object
//const another = Circle(1); // Window object

another.draw();

console.log("-----------------------");

// Enumerating properties

for(let key in another){
    console.log(key+" "+another[key]);
}

console.log("-----------------------");

const res = Object.keys(another);
console.log(res);

console.log("-----------------------");

if("radius" in another){
    console.log("TRUE");
}

*/




// Prototypes

// Prototypical Inheritance

/*

// Prototype Descriptor

let person = {
    name: "kedar",
    age: 25
}


console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

console.log(descriptor);


Object.defineProperty(person, "name", {
    writable: false,
    enumerable: true,
    configurable: false
});


person.name = "john";

console.log(person);
console.log(Object.keys(person));


delete person.name;

console.log(Object.keys(person));

*/




/*


function Circle(radius){

    // Instance Members

    this.radius = radius;

    this.draw = function(){
        console.log(radius);
    }
}

// Prototype Members

Circle.prototype.draw1 = function(){
    this.draw();
    console.log("Prototype Draw Function");
}

const c1 = new Circle(2);
//c1.draw();
//c1.draw1();

//console.log(c1.toString()); // [object Object]


Circle.prototype.toString = function() {
    console.log("Prototype toString()");
}

//console.log(c1.toString()); // Prototype toString()

// for-in returns instance as well as prototype members

for(let key in c1){
    console.log(key);
}

console.log(c1.hasOwnProperty("radius")); // true (instance member)
console.log(c1.hasOwnProperty("draw1")); // false (prototype member)


*/



/*

// Creatinng your own prototypical inheritance

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius){
    this.radius = radius;
}

//Circle.prototype = Object.create(Object.prototype); // (default -> circle inherits object)
Circle.prototype = Object.create(Shape.prototype); // (custom -> circle inherits shape & object)

Circle.prototype.draw = function(){
    console.log("draw");
}

const s = new Shape();
const c = new Circle(1);

c.duplicate();

*/






// Resetting the constructor

/*

// Ex 1:

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log("draw");
}

//const s = new Shape();
//const c = new Circle(1);

//console.log(s.duplicate()); // duplicate
//console.log(s.draw()); // Error

//console.log(c.duplicate()); // Error
//console.log(c.draw()); // draw




//const sh = new Circle.prototype.constructor(1); // equal to const sh = new Circle(1)

// Or

//const sh = new Circle(1);
console.log(sh); // Circle{radius: 1}
console.log(sh.duplicate()); // Error
console.log(sh.draw()); // draw

*/



/*

// Ex 2:

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // Here Circle inherits Shape

Circle.prototype.draw = function(){
    console.log("draw");
}

const s = new Shape();
const c = new Circle(1);

//console.log(s.duplicate()); // duplicate
//console.log(s.draw()); // Error

//console.log(c.duplicate()); // duplicate
//console.log(c.draw()); // draw



const sh = new Circle.prototype.constructor(1); // not equal to const sh = new Circle(1)
console.log(sh); // Shape{}
console.log(sh.duplicate()); // duplicate
console.log(sh.draw()); // Error


const sh = new Circle(1);
console.log(sh); // Circle{radius: 1}
console.log(sh.duplicate()); // duplicate
console.log(sh.draw()); // draw

*/



/*

// Ex 3:

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // Here we made contructor() to point Circle

Circle.prototype.draw = function(){
    console.log("draw");
}

const sh = new Circle.prototype.constructor(1);
console.log(sh); // Circle{radius: 1}
console.log(sh.duplicate()); // duplicate
console.log(sh.draw()); // draw()


*/



/*

// Calling The Super Constructor

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius, color){
    Shape.call(this, color);

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // Here we made contructor() to point Circle

Circle.prototype.draw = function(){
    console.log("draw");
}

const c = new Circle(1, "Green");

console.log(c);

*/



/*

// Intermediate Function Inheritance

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Circle;
}

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius, color){
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape); // Extend

Circle.prototype.draw = function(){
    console.log("draw");
}

function Square(side){
    this.side = side;
}

extend(Square, Shape);

const c = new Circle(1, "Green");
const s = new Square(2);

console.log(c.duplicate()); // duplicate
console.log(s.duplicate()); // duplicate

*/




/*

// Method Overriding

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Circle;
}

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(){
}

extend(Circle, Shape); 

Circle.prototype.duplicate = function(){
    
    Shape.prototype.duplicate.call(this); // If we want to call duplicate() in shape

    console.log("duplicate circle");
}

const c = new Circle();

console.log(c.duplicate()); // duplicate circle

*/




/*

// Polymorphism

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Circle;
}

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(){
}

extend(Circle, Shape); 

Circle.prototype.duplicate = function(){
    console.log("duplicate circle");
}

function Square(){
}

extend(Square, Shape); 

Square.prototype.duplicate = function(){
    console.log("duplicate Square");
}


const shapes = [
    new Circle(),
    new Square()
]

for(let shape of shapes){
    shape.duplicate();
}


*/




// Mixins

/*

// Without mixin()

const canEat = {
    eat: function(){
        this.hunger--;
        console.log("eating");
    }
};

const canWalk = {
    walk: function(){
        console.log("Walking");
    }
};

const canSwim = {
    swim: function(){
        console.log("Swim");
    }
};

function Person(){
}

Object.assign(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function GoldFish(){
}

Object.assign(GoldFish.prototype, canEat, canSwim);

const goldFish = new GoldFish();
console.log(goldFish);

*/


/*


// With mixin()

function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log("eating");
    }
};

const canWalk = {
    walk: function(){
        console.log("Walking");
    }
};

const canSwim = {
    swim: function(){
        console.log("Swim");
    }
};

function Person(){
}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function GoldFish(){
}

mixin(GoldFish.prototype, canEat, canSwim);

const goldFish = new GoldFish();
console.log(goldFish);

*/




/*

// ES6 Classes


//function Circle(radius){
//    this.radius = radius;

//    this.draw = function(){
//        console.log("draw");
//    }
//}

class Circle{
    constructor(radius){
        this.radius = radius;
        this.move = function(){
            console.log("move");
        }
    }

    draw(){
        console.log("draw");
    }
}

const c = new Circle(1);

console.log(c);

*/




/*

// Instance Methods & Static Methods

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    // Instance Method

    draw(){
        console.log("draw");
    }

    // Static Method

    static parse(str){ // It is not available under __proto__ so it a class function
        const radius = JSON.parse(str).radius;
        return new Circle(radius);               // so we can call this function without creating a instance of a class
    }
}

const circle = Circle.parse('{"radius": 1}');
console.log(circle);

*/



/*

// The "this" Keyword

const Circle = function(){
    this.draw = function(){
        console.log(this);
    }
};

const c = new Circle();
c.draw();

*/




/*

// Private members using Symbols

const _radius = Symbol();
const _draw = Symbol();

class Circle{
    constructor(radius){
        this[_radius] = radius;
    }

    [_draw](){

    }
}

const c = new Circle(1);

const key = Object.getOwnPropertySymbols(c)[0];

console.log(c[key]);

*/




/*


// Private members using WeakMaps

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);

        _move.set(this, () => {
            console.log("move", this);
        });
    }

    draw(){
        _move.get(this)();

        console.log(_radius.get(this));
    }
};

const c = new Circle(1);
c.draw();


*/




/*

// Setters & Getters

const _radius = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }

    get radius(){
        return _radius.get(this);
    }

    set radius(value){
        if(value <= 0) throw new Error("Invalid Radius");
        _radius.set(this, value);
    }
}

const c = new Circle(1);
console.log(c.radius);

c.radius = 10;
console.log(c.radius);

c.radius = -1;

*/




/*

// Inheritance using classes

class Shape{
    constructor(color){
        this.color = color;
    }
    move(){
        console.log("move");
    }
}

class Circle extends Shape{
    constructor(color, radius){
        super(color);

        this.radius = radius;
    }
    draw(){
        console.log("draw");
    }
}

const c = new Circle("Green", 2);
c.move();

*/




// Method overriding in Classes

class Shape{
    move(){
        console.log("Shape Move");
    }
}

class Circle extends Shape{
    move(){
        super.move();
        console.log("Circle Move");
    }
}

const c = new Circle();
c.move(); // Circle Move
