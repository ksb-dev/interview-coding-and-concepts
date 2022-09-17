/*

const xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

xhr.send();

xhr.onload = function(){
    //console.log(xhr.response);

    const listOfPosts = JSON.parse(xhr.response);
    console.log(listOfPosts);
};

*/


// OR

/*

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

xhr.send();

xhr.responseType = 'json';

xhr.onload = function(){
    //console.log(xhr.response);

    const listOfPosts = xhr.response;

    //console.log(listOfPosts);

    for(const post of listOfPosts){
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body.toUpperCase();
        listElement.append(postEl);
    }
};

*/




// Creating resource

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

const sendHttpRequest = ((method, url, data) => {
    //const promise = new Promise((resolve, reject) => {

    //     const xhr = new XMLHttpRequest();

    // 9.2 Adding Headers

    //       xhr.setRequestHeader('Content-Type', 'application/json');

    //     xhr.open(method,url);
    
    //     xhr.onload = function(){
    //         // 5. Error Handling

    //         if(xhr.status >= 200 && xhr.status < 300){
    //             resolve(JSON.parse(xhr.response));
    //         }
    //         else{
    //             reject(new Error('Something went wrong'));
    //         }
    //     };

    //     // 6. This Error Handling wiil work for Network Errors

    //     xhr.onerror = function(){
    //         console.log(xhr.response);
    //         console.log(xhr.status);
    //     }

    //     xhr.send(JSON.stringify(data))
     
    //});

    //return promise;


    // 7. Using fetch() API for GET requests (It return promise so we don't need to use promise explicitly & by default method is "GET")

    //return fetch(url)
    //.then(response => {
    //    return response.json();
    //});


    // 8. Using fetch() API for POST requests

    return fetch(url,{
        method: method,
        //body: JSON.stringify(data),
        body: data
       
        // 9.1 Adding Headers

        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
    .then(response => {
        return response.json();
    });
});


function fetchPosts(){

        sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts') // to get error change url
        .then(responseData => {

            const listOfPosts = responseData; 

            for(const post of listOfPosts){
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body.toUpperCase();
                postEl.querySelector('li').id = post.id;
                listElement.append(postEl);
            }
        });
}


function createPost(title, content){
    const userId = Math.random();

    const post = {
        title: title,
        body: content,
        userId: userId
    }

    // 10. Sending form data

    const fd = new FormData(form);
    //fd.append('title', title); // We can comment these 2 lines & set name="title" & name="body"
    //fd.append('body', content);// in html in form tag  & use "form" in FormData then also we get same result
    fd.append('userId', userId);

    //sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd)
    .then(responseData => {

        //console.log(responseData);

        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body.toUpperCase();
        listElement.append(postEl);
    })
}


fetchButton.addEventListener('click', () => {
    createPost('DUMMY', 'A dummy post!');
    fetchPosts();
});


// 3. Writing title, content in the form & sending

form .addEventListener('submit', event => {
    event.preventDefault();

    //console.log(event.currentTarget);

    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent);
});



// fetchPosts(); // 1. Fetching posta from url

// createPost('DUMMY', 'A dummy post!'); // 2. Manually Creating Post & Sending


// 4. DELETE Request

postList.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
        //console.log("Clicked");

        const postId = event.target.closest('li').id;

        //console.log(postId);

        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})