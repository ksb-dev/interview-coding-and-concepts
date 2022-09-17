/*

// Add & Remove Events

const button = document.querySelector('button');

//button.addEventListener('click', () => {
//    console.log("Clicked");
//});

const buttonClick = () => {
    console.log("Clicked");
};

button.addEventListener('click', buttonClick);

setTimeout(() => {
    button.removeEventListener('click', buttonClick);
}, 5000);

*/



/*

// The Event Object

const button = document.querySelector('button');

const buttonClick = (event) => {
    event.target.disabled = 'button'; // To disable button after 1 click
    console.log(event); // MouseEvent {…}
};

button.addEventListener('click', buttonClick);

*/




/*

// Working with preventDefault() (Use to prevent event's default action)

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
})

*/




// Capturing & Bubbling Phases

/*

// Bubbling

// When an event happens on an element, it first runs the event handlers on it, 
// then on its parent, then all the way up on other ancestors.

const button = document.querySelector('button');

button.addEventListener('click', event => {
    console.log('CLICKED BUTTON');
    console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
});

const form = document.querySelector('form');

form.addEventListener('click', event => {
    event.preventDefault();
    console.log('CLICKED FORM');
    console.log(event);
});

const button1 = document.querySelector('.b1');

button1.addEventListener('click', event => {
    console.log('CLICKED SUBMIT');
    console.log(event);
});

*/


// Capturing

// When an event happens on an element, it first runs the event handlers on its parent, 
// then on itself, then all the way down on other descendants.

/*

const button = document.querySelector('button');

button.addEventListener('click', event => {
    console.log('CLICKED BUTTON');
    console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
}, true);                                    // Remember passing true / false

*/




/*

// Stopping propogation

const button = document.querySelector('button');

button.addEventListener('click', event => {
    event.stopPropagation();
    console.log('CLICKED BUTTON');
    console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
});

*/




// Event Delegation (To add same event handler for many elements)

/*
const list = document.querySelector('ul');

list.addEventListener('click', event => {
    event.target.classList.toggle('highlight');
});

*/


/*

// Event delegation for more complex list

const list = document.querySelector('ol');

list.addEventListener('click', event => {
    //event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
});

*/




/*

// Triggering DOM Elements Programatically

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    console.log('CLICKED FORM');
    console.log(event);
});


const list = document.querySelector('ul');

list.addEventListener('click', event => {
    event.target.classList.toggle('highlight');
    form.submit();                                // Here if i click on any "li" the "submit"
});                                               // event in form triggers.

*/



/*

// "this" in Event Handling

const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log(this);                      // window object (when we use arrow function)
});

const button1 = document.querySelector('button');

button1.addEventListener('click', function(){
    console.log(this);                      // click me (when we use normal function)
});

*/