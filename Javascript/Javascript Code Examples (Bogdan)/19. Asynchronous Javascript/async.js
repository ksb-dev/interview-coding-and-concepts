// Callback

/*
function getUser(userId, callback) {
    console.log('Get user from the database.');
    setTimeout(() => {
        callback({
            userId: userId,
            username: 'john'
        });
    }, 1000);
}

getUser(100, (user) => {
   console.log(user);
});

*/

// Blocking code & Event loop

// A function that takes a long time to execute is known as a blocking function. 
//Technically, the blocking functions block all the interactions with the webpage 
//such as mouse click.


/*
const button = document.querySelector('button');
const output = document.querySelector('p');

function trackHandler(){
    console.log("Clicked");
}

button.addEventListener('click', trackHandler);

let result = 0;

for(let i = 0; i < 100000000; i++){
    result += i;
}

console.log(result);

*/



// NOTE: https://www.javascripttutorial.net/javascript-event-loop/


/*
const button = document.querySelector('button');
const output = document.querySelector('p');

function trackHandler(){
    navigator.geolocation.getCurrentPosition(posData => {
        console.log(posData);
    }, error => {
        console.log(error);
    });

    console.log("Getting Position");
}

button.addEventListener('click', trackHandler);
*/

/*
console.log('Start script...');

setTimeout(() => {
    console.log('Download a file.');
}, 1000);

console.log('Done!');
*/


// 1. "console.log('Start script...');"" placed on call stack of javascript engine, executes, 
//    then javascript engine pops it out of the call stack
// 2. setTimeout() is placed on call stack of javascript engine and the Web API creates 
//    a timer that will expire in 1 second and places "console.log('Download a file.');""
//    in a queue called callback queue, because setTimeout() is part of Web API of the
//    browser.    
// 3. The event loop is a constantly running process that monitors both the callback queue 
//    and the call stack
// 4. "console.log('Done!');" placed on call stack of javascript engine, executes, then
//    javascript engine pops it out of the call stack.
// 5. After completion of 1 second of timer event loop places "console.log('Download a file.');"
//    in a call stack of javascript engine from callback queue of the Web API then engine
//    finally executes that code.

/*
console.log('Hi!');

setTimeout(() => {
    console.log('Download a file.');
}, 0);

console.log('Bye');
*/


// NOTE: Here if you think timer is 0 sec so "Download a File" will be printed before "Bye"
//       you're wrong. The calls or events that are part of Web API of the browser will only be
//       executed when the call stack of the javascript engine is empty.








// Getting Started With Promises

/*

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

getIds.then(Ids => {
    console.log(Ids);
});

*/

// Rejecting Promise

/*

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([523, 883, 432, 974]);
        reject([523, 883, 432, 974]);
    }, 1500);
}).then(Ids => {
    console.log(Ids);
}).catch(error => {
    console.log("Error!");
});

*/


/*

const getRecipe = recId => {
    return new Promise((resolve, reject) => {
        //console.log(recId);
        setTimeout(Id => {
            const recipe = {title: "Fresh Tomato Pasta"};
            resolve(`${Id}: ${recipe.title}`);
        }, 1500, recId);
    });
};

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
        //reject([523, 883, 432, 974]);
    }, 1500);
})
.then(Ids => {
    console.log(Ids);
    return getRecipe(Ids[2]);
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log("Error!");
})
.finally(() =>{
    console.log("Bye!")
});


// Using async & await


//async function getRecipeAW(){
//    const Ids = await getIds;
//    console.log(Ids);

//    const recipe = await getRecipe(Ids[2]);
//    console.log(recipe);

//    return recipe;
//}

//getRecipeAW().then((result) => {
//    console.log(`${result} is the best ever`);
//});


*/




/*

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'john'
            });
        }, 2000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 4 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
            //reject(services.length * 100);
        }, 6 * 1000);
    });
}


//getUser(100)
//    .then(getServices)
//    .then(getServiceCost)
//    .then(console.log);

// Or

//getUser(100)
//    .then(user => {
//        return getServices(user);
//    })
//   .then(services => {
//        return getServiceCost(services);
//    })
//    .then(cost => {
//        console.log(cost);
//    });




// Using async & await    


async function showServiceCost() {
    try{
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log(`The service cost is ${cost}`);
    }
    catch{
          console.log("Error!");
    }
}

showServiceCost();

// NOTE: When we use async & await to handle errors we have to use try, catch

*/




/*
const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});

const helloPromise  = function() {
    return new Promise(function(resolve, reject) {
      const message = `Hi, How are you!`;
  
      resolve(message)
    });
  }
  
  
  const demoPromise= function() {
  
    myFirstPromise
    .then(helloPromise)
    .then((successMsg) => {
        console.log("Success: " + successMsg);
    })
    .catch((errorMsg) => { 
        console.log("Error: " + errorMsg);
    })
  }
  

 // async function demoPromise() {
 //   try {
 //     let message = await myFirstPromise;
 //     let message1  = await helloPromise();
 //     console.log(message1);
  
 //   }
 //   catch{
 //       console.log("Error!");
 //   }
 // }


 // demoPromise();


 */




/*

 // Promise.race()

// The Promise.race() static method accepts a list of promises and returns a promise 
// that fulfills or rejects as soon as there is one promise that fulfills or rejects, 
// with the value or reason from that promise.


// Ex 1:

 const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        //resolve(20);
        reject(20);
    }, 2 * 1000);
});


Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));


*/    


/*

// Ex 2:

const TIMEOUT = 500;
const DATA_LOAD_TIME = 5000;

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = 'Promise.race() Demo';
            resolve(message);
        }, DATA_LOAD_TIME);
    });
}

function showContent(message) {
    document.querySelector('#message').textContent = message;
}

function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(console.log("Timeout")), TIMEOUT);
    });
}

function showLoadingIndicator() {
    document.querySelector('#loader').className = 'loader';
}

function hideLoadingIndicator() {
    document.querySelector('#loader').className = '';
}


// handle button click event
const btn = document.querySelector('#btnGet');

btn.addEventListener('click', () => {
    // reset UI if users click the second time
    reset();

    // show content or loading indicator
    Promise.race([getData()
            .then(showContent)
            .then(hideLoadingIndicator), timeout()
        ])
        .catch(showLoadingIndicator);
});

// reset UI
function reset() {
    hideLoadingIndicator();
    showContent('');
}

*/




/*

// Promise.all()

// The Promise.all() static method accepts a list of Promises and returns a Promise that:

//resolves when every input Promise has resolved or
//rejected when any of the input Promise has rejected.


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');

        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('The second promise has resolved');
        console.log('The second promise has resolved');
        //resolve(20);
        reject(20);
    }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});

//Promise.all([p1, p2, p3])
Promise.allSettled([p1, p2, p3])
    .then(results => {
        const total = results.reduce((p, c) => p + c);

        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    });


*/
