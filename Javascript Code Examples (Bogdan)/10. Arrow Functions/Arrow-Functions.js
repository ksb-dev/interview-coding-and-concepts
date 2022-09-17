// Arrow functions are anonymous

/*

// Function Expression

var fn = function(a, b){
    return a + b;
}

// Arrow function expression

var fn1 = (a, b) =>  a + b;   //   (;) optional
console.log(fn1(10 , 20));

var fn2 = (a) => console.log(a);
fn2(10);

// Or 

var fn3 = a => console.log(a); // Parenthesis are optional when you have onle one parameter
fn3(10);


// When you are returning objects include then in paranthesis

var fn4 = () => ({ // Parenthesis are mandatory without any parameters
    name: "kedar",
    age: 28
})

console.log(fn4());

*/


// Arrow functions & this

/*

const num = {
    value: 100,
    info: function(){ // or function info()
        console.log(this); // {value: 100, info: f}
        return this.value;
    }
};

console.log(num.info()); // 100


const num1 = {
    value: 100,
    info: () => {
        console.log(this); // window object
        return this.value;
    }
};

console.log(num1.info()); // undefined

*/



/*


const num = {
    value: 100,
    info: function info(){
        console.log(this); // {value: 20}
        return this.value;
    }
};

const num1 = {
    value: 20
}

console.log(num.info.call(num1)); // 20


const num2 = {
    value: 100,
    info: () => {
        console.log(this); // window object
        return this.value;
    }
};

const num3 = {
    value: 200
}

console.log(num2.info.call(num3)); // undefined

*/


/*

const str = {
    value: "Delayed Meeting",
    greet1: function greet(){
        setTimeout(function() {
            console.log(this); // Window Object
            console.log(this.value); //undefined
        },1000);
    },

    greet2: function greet(){
        const self = this;
        setTimeout(function() {
            console.log(self); // {value: "Delayed Meeting", greet1: f, greet2: f, greet3: f, greet: f}
            console.log(self.value); // Delayed Meeting
        },1000);
    },

    greet3: function greet(){
        setTimeout(function() {
            console.log(this); // {value: "Delayed Meeting", greet1: f, greet2: f, greet3: f, greet: f}
            console.log(this.value); // Delayed Meeting
        }.bind(this),1000);
    },

    greet4: function greet(){
        setTimeout(() => {
            console.log(this); // {value: "Delayed Meeting", greet1: f, greet2: f, greet3: f, greet: f}
            console.log(this.value); // Delayed Meeting
        },1000);
    }
};

//str.greet1();
//str.greet2();
//str.greet3();
//str.greet4();


*/