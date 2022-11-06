/*

You can use these methods (call, bind & apply) to tie a function into an object and call the function as 
if it belonged to that object

*/

/*

NOTE: 

The call() method takes arguments separately.

The apply() method takes arguments as an array.

*/

// -----------------------------------------------

/*

var obj = { name: 'Kedar' }

function sayHello () {
  return 'Hello ' + this.name
}

console.log(sayHello()) // Hello

// With the call() method, you can write a method that can be used on different objects.
console.log(sayHello.call(obj)) // Hello Kedar
// With the apply() method, you can write a method that can be used on different objects.
console.log(sayHello.apply(obj)) // Hello Kedar

*/

// -----------------------------------------------

/*

const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

const person1 = {
  firstName: 'John',
  lastName: 'Doe'
}

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe'
}

// With call(), an object can use a method belonging to another object.
console.log(person.fullName.call(person1)) // John Doe
console.log(person.fullName.call(person2)) // Mary Doe

// With call(), an object can use a method belonging to another object.
console.log(person.fullName.apply(person1)) // John Doe
console.log(person.fullName.apply(person2)) // Mary Doe


*/

// -----------------------------------------------

// The call() Method with Arguments

/*

const person = {
  fullName: function (country, state, city) {
    return (
      this.firstName +
      ' ' +
      this.lastName +
      ',' +
      country +
      ',' +
      state +
      ',' +
      city
    )
  }
}

const person1 = {
  firstName: 'Kedar',
  lastName: 'Babaleshwar'
}

console.log(person.fullName.call(person1, ' India', ' Karnataka', ' Belagavi'))

// console.log(person.fullName.apply(person1, ' India', ' Karnataka', ' Belagavi')) // error

// The apply() method is very handy if you want to use an array instead of an argument list.
console.log(
  person.fullName.apply(person1, [' India', ' Karnataka', ' Belagavi'])
)

*/

// -----------------------------------------------

/*

const person = { name: 'Hector' }

function sayHi (age) {
  return `${this.name} is ${age} years`
}

console.log(sayHi.call(person, 35)) // Hector is 35 years
console.log(sayHi.bind(person, 38)) // ƒ sayHi (age) {
                                    //     return `${this.name} is ${age} years`
                                    // }

*/

// -----------------------------------------------

/*

const age = 10

var person = {
  name: 'Radhe',
  age: 20,
  getAge: function () {
    return this.age
  }
}

var person2 = { age: 24 }

console.log(person.getAge.call(person2)) // 24
console.log(person.getAge.apply(person2)) // 24
console.log(person.getAge.bind(person2)()) // 24 extra () because bind returns getAge function

*/

// -----------------------------------------------

var status = '😎'

setTimeout(function () {
  const status = '😍'

  const data = {
    status: '🥑',
    getStatus () {
      return this.status
    }
  }

  console.log(data.getStatus()) // 🥑
  console.log(data.getStatus.call(this)) // 😎
  console.log(data.getStatus.bind(this)()) // 😎
}, 0)
