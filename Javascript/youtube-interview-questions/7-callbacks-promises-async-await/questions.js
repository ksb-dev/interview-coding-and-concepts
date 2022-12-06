// Question-1

/*
console.log('Start')

const Promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
})

Promise1.then(res => {
  console.log(res)
})

console.log('Finish')

*/

/*

Start
1
3
Finish
2

if we comment resolve(2) then

Start
1
3
Finish

*/

//------------------------------------------
// Question-2

/*
console.log('Start')

function fn () {
  return new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    console.log(3)
  })
}

console.log('Middle')

fn().then(res => {
  console.log(res)
})

console.log('Finish')
*/

/*

Start
Middle
1
3
Finish
2

*/

//------------------------------------------
// Question-3

/*
function job () {
  return new Promise((resolve, reject) => {
    reject()
  })
}

let promise = job()

promise
  .then(res => {
    console.log('Success-1')
  })
  .then(res => {
    console.log('Success-2')
  })
  .then(res => {
    console.log('Success-3')
  })
  .catch(err => {
    console.log('Error-1')
  })
  .then(res => {
    console.log('Success-4')
  })

  */

/*

Error-1
Success-4

*/

//------------------------------------------
// Question-4

/*
function job (state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve('Success')
    } else {
      reject('Error')
    }
  })
}

let promise = job(true)

promise
  .then(res => {
    console.log(res)

    return job(false)
  })
  .catch(err => {
    console.log(err)

    return 'Error Caght'
  })
  .then(res => {
    console.log(res)

    return job(true)
  })
  .catch(err => {
    console.log(err)
  })

*/

/*

Success
Error 
Error Caught 
  
*/

//------------------------------------------
// Question-6
