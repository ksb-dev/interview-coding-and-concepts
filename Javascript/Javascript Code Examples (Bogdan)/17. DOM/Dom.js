// Document Object Model (DOM)

// The Document Object Model (DOM) is an application programming interface (API) 
// for manipulating HTML and XML documents.

//console.dir(document);

/*

// 1. Selecting Elements In The DOM

const main = document.getElementById('main-title');
console.log(main); // <h1 id="main-title">Dive into the DOM!</h1>

console.dir(document.getElementById('main-title'));

const item = document.getElementsByClassName('list-item');
console.log(item); // HTMLCollection(2) [li.list-item, li.list-item]

const query = document.querySelector('.list-item');
console.log(query); // <li class="list-item">Item 2</li>

const all = document.querySelectorAll('.list-item');
console.log(all); // NodeList(2) [li.list-item, li.list-item]

const first = document.querySelector('ul li:first-of-type');
console.log(first); // <li>Item 1</li>

const last = document.querySelector('ul li:last-of-type');
console.log(last); // <li class="list-item">Item 3</li>

const ul = document.querySelector('ul');
console.log(ul); // <ul>
                 // <li>Item 1</li>
                 // <li class="list-item">Item 2</li>
                 // <li class="list-item">Item 3</li>
                 // </ul>

*/




/*

// Exploring & Changing DOM Properties

const h1 = document.querySelector('h1');
h1.textContent = "New"; 
h1.className = "Main";

h1.style.color = "Green";

console.log(h1);

*/




/*

// Attributes Vs Properties

const input = document.querySelector('#inp');
//input.value = "Hey"; // setting value here will not change value in element

input.setAttribute('value', 'Text'); // This will change element value 

console.log(input);

console.log(input.getAttribute('value'));

*/




/*

// Selecting Multiple Elements

//const listElements = document.querySelectorAll('li');


// Or

//const listElements = document.getElementsByTagName('li');

for(let listElement of listElements){
    console.log(listElement);
}

*/




/*

// Traversing The DOM

<div>
   <p>
       <em>Test</em>
   </p>
</div>

// <p> is child of <div>
// <p> & <em> descendents of <div>
// <div> is parent of <p>
// <div> is ancestor of <p> & <em>

*/




/*

// Traversing the child nodes

const ul = document.querySelector('ul');
console.log(ul.children); // HTMLCollection(3) [li, li.list-item, li.list-item]

console.log(ul.childNodes); // NodeList(7) [text, li, text, li.list-item, text, li.list-item, text]

// The main difference between children and childNodes property is that children 
// work upon elements and childNodes on nodes including non-element nodes like text
// and comment nodes.

console.log(ul.firstChild); // #text

console.log(ul.firstElementChild); // <li>Item 1</li>

console.log(ul.lastChild); // #text

console.log(ul.lastElementChild); // <li class="list-item">Item 3</li>

*/





/*

// Using ParentNode & ParentElement

const li = document.querySelector('li');

console.log(li.parentNode); // <ul>
                            // <li>Item 1</li>
                            // <li class="list-item">Item 2</li>
                            // <li class="list-item">Item 3</li>
                            // </ul>

console.log(li.parentElement); // same as above

console.log(li.closest('body')); // <body>...</body>

console.log(li.closest('header')) // null

*/




/*

// Selecting sibling elements

const sibling = document.querySelector('ul');

console.log(sibling.previousSibling); // #text
console.log(sibling.previousElementSibling); // <header>...</header>
console.log(sibling.nextElementSibling); // <input...>

*/




/*

// Styling DOM Elements


const ul = document.querySelector('ul');
//ul.style.backgroundColor = 'cyan';

//ul.className = '';
const button = document.querySelector('button');

button.addEventListener('click', () => {
    //if(ul.className === 'grey-bg visible'){
    //    ul.className = 'grey-gb invisible';
    //}
    //else{
    //    ul.className = 'grey-bg visible';
    //}

    //ul.classList.toggle('visible');
    ul.classList.toggle('invisible');
});

*/

// ClassList -> The classList is a DOMTokenList object that represents the contents of 
//              the element’s class attribute.


/*

// Adding Elements via HTML in code

const ul = document.querySelector('ul');

//ul.innerHTML = '<h2>New Title</h2>';

//ul.innerHTML = ul.innerHTML + '<li>Item 4</li>';

//console.log(ul);

//const div = document.querySelector('div');

//div.innerHTML = div.innerHTML + '<p>Something Went Wrong!</p>';

//div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>');

*/




/*

// Adding Elements via createElement()

const ul = document.querySelector('ul');

const newLi = document.createElement('li');
ul.appendChild(newLi);
newLi.textContent = 'Item 4';
newLi.style.color = 'yellow';

*/




/*

// Insertimg DOM Elements

const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
//ul.prepend(newLi);

//ul.lastElementChild.before(newLi);
//ul.lastElementChild.after(newLi);
//ul.firstElementChild.replaceWith(newLi);

const secondLi = ul.children[1];

secondLi.insertAdjacentElement('afterend', newLi);

*/




/*

// Cloning DOM Nodes

const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';

const newLi2 = newLi.cloneNode(true);
ul.append(newLi, newLi2);

// NOTE:

///The ParentNode.append() method inserts a set of Node objects or DOMString objects after 
///the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.

///Differences from Node.appendChild():

// ParentNode.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
// ParentNode.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// ParentNode.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.


*/




/*

// Live Node Lists vs Static Node Lists

const ul = document.querySelector('ul');

const liveNode = ul.getElementsByTagName('li');

const staticNode = document.querySelectorAll('li');

const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
ul.append(newLi);

liveNode[0].textContent = 'Item 11';

console.log(liveNode.length); // 4
console.log(staticNode.length); // 3

*/





/*

// Removing Elements

const ul = document.querySelector('ul');

//ul.remove();
//ul.parentElement.removeChild(ul);

*/





// Advanced DOM

