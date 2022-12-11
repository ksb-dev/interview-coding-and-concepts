// -----------------------------------------------------------
// Ex --> 1 : Return the value of the property with key country.

/*
function myFunction (obj) {
  return obj.country
}

console.log(myFunction({ continent: 'Asia', country: 'India' }))
*/

// -----------------------------------------------------------
// Ex --> 2 : Return the value of the property with key 'prop-2'.

/*
function myFunction (obj) {
  return obj['prop-2']
}

console.log(myFunction({ one: 1, 'prop-2': 2 }))
*/

// -----------------------------------------------------------
// Ex --> 3 : Return the value of the property with key equal to the value of the string

/*
function myFunction (obj, key) {
  return obj[key]
}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }, 'continent'))
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }, 'country'))
*/

// -----------------------------------------------------------
// Ex --> 4 : Return true if the object has a property with key 'b'. Return false otherwise

/*
function myFunction (a, b) {
  return b in a
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'))
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a'))
console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'z'))
*/

// -----------------------------------------------------------
// Ex --> 5 : Return true if the object has a property with key 'b', but only if it has a truthy value.
//            In other words, it should not be null or undefined or false. Return false otherwise.

/*
function myFunction (a, b) {
  //return b in a && a[b] !== null && a[b] !== undefined && a[b] !== NaN && a[b] !== 0 && a[b] !== " ";
  return Boolean(a[b]);
}

console.log(myFunction({x:'a',y:null,z:'c'},'y'))
*/

// -----------------------------------------------------------
// Ex --> 6 : Create an object that has a property with key 'key' and a value equal to the string.

/*
function myFunction (a) {
  return {key : a}
}

console.log('b')
*/

// -----------------------------------------------------------
// Ex --> 7 : Create an object that has a property with key 'a' and a value of 'b'. Return the object.

/*
function myFunction (a, b) {
  return { [a]: b }
}

console.log(myFunction('b', 'w'))
*/

// -----------------------------------------------------------
// Ex --> 8 : Create an object that has properties with keys 'a' and corresponding values 'b'.
//            Return the object.

/*
function myFunction (a, b) {
  //   let obj = {}

  //   for (let i = 0; i < a.length; i++) {
  //     obj[a[i]] = b[i]
  //   }
  //   return obj

  return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {})
}

console.log(myFunction(['a', 'b', 'c'], [1, 2, 3]))
*/

// -----------------------------------------------------------
// Ex --> 9 : Return an array with all object keys.

/*
function myFunction (a) {
  return Object.keys(a)
}

console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }))
*/

// -----------------------------------------------------------
// Ex --> 10 : Write a function that takes an object as argument.
//             In some cases the object contains other objects with some deeply nested properties.
//             Return the property 'b' of object 'a' inside the original object if it exists.
//             If not, return undefined

/*
function myFunction (obj) {
  return obj?.a?.b
}

console.log(myFunction({ a: 1 }))
console.log(myFunction({ a: { b: { c: 3 } } }))
console.log(myFunction({ b: { a: 1 } }))
console.log(myFunction({ a: { b: 2 } }))
*/

// -----------------------------------------------------------
// Ex --> 11 : Return the sum of all object values.

/*
function myFunction (a) {
  //   let values = Object.values(a)
  //   let sum = 0

  //   for (let i = 0; i < values.length; i++) {
  //     sum += values[i]
  //   }
  //   return sum

  return Object.values(a).reduce((sum, cur) => sum + cur, 0)
}

console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }))
*/

// -----------------------------------------------------------
// Ex --> 12 : Return an object with all original object properties. except for the property with key 'b'

/*
function myFunction (obj) {
  //   delete obj.b
  //   return obj

  const { b, ...rest } = obj
  return rest
}

console.log(myFunction({ a: 1, b: 7, c: 3 }))
*/

// -----------------------------------------------------------
// Ex --> 13 :
