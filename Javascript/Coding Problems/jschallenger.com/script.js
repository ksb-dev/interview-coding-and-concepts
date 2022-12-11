// slice doesn't affect original array

/*
function capitalize(input) {
  let res = "";

  for(let i = 0; i < input.length; i++) {
    res += i % 2 === 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
  }
  return res
}

console.log(capitalize("capitalize every other letter"));
*/

// -----------------------------------------------------------

/*
function myFunction (a, b) {
  // const keys = Object.keys(a);
  // let res = false

  // keys.forEach((key) => {
  //   let item = key.toString();

  //   if(item === b) {
  //     res = true
  //   }
  // });
  // return res;

  return b in a;
}

console.log(myFunction({a:1,b:2,c:3}, 'b'));
*/

// -----------------------------------------------------------

/*
function myFunction(a) {
  //  let res = [];
   
  //  for(let i = 0; i < 3; i++) {
  //  res.push(a[i]);
  //  }
  //  return res;

   return a.slice(0, 3);
}

console.log(myFunction([1, 2, 3, 4, 5]));
*/

// -----------------------------------------------------------

/*
function myFunction(obj) {
  return obj.country;
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
*/

// -----------------------------------------------------------

/*
function myFunction(obj, key) {
  return obj[key];
}
console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'));
*/

// -----------------------------------------------------------

/*
function myFunction(a, n) {
  //return a.slice(n-1, n);
  return a[n - 1];
}

console.log(myFunction('zyxbwpl',5));
*/

// -----------------------------------------------------------

/*
function fn(a) {
  //return a.slice(a.length - 3);
  return str.slice(-3);
}

console.log(fn('abcdefg'));
*/

// -----------------------------------------------------------

/*
function fn(a) {
  //return a.slice(0, a.length - 3);
  return a.slice(0, -3);
}

console.log(fn('abcdefg'));
*/

// -----------------------------------------------------------

/*
function myFunction (a, b) {
  //return b in a && a[b] !== null && a[b] !== undefined && a[b] !== NaN && a[b] !== 0 && a[b] !== " ";
  return Boolean(a[b]);
}

console.log(myFunction({x:'a',y:null,z:'c'},'y'))
*/

// -----------------------------------------------------------

/*
function myFunction (set, val) {
  return set.has(val)
}

console.log(myFunction(new Set([1, 2, 3]), 2))
*/

// -----------------------------------------------------------

/*
// Return b percent of a
function myFunction (a, b) {
  return (a / 100) * b
}

console.log(myFunction(100, 50))
*/

// -----------------------------------------------------------

/*
function myFunction (a, b) {
  return { [a]: b }
}

console.log(myFunction('a', 'b'))
*/

// -----------------------------------------------------------

/*
function myFunction (a) {
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] === 'i') return i
  //   }
  //   return -1

  a.indexOf(a)
}

console.log(myFunction('praise'))
*/

// -----------------------------------------------------------

/*
function myFunction (a, b) {
  //   let res = []
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] !== b) res.push(a[i])
  //   }
  //   return res

  return a.filter(cur => cur !== b)
}

console.log(myFunction([1, 2, '2'], '2'))
*/

/*
Write a function that takes an object as argument. In some cases the object contains other objects
with some deeply nested properties. Return the property 'b' of object 'a' inside the original object 
if it exists. If not, return undefined
*/

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

/*
function myFunction (a, n) {
  return a[n - 1]
}

console.log(myFunction([1, 2, 3, 4, 5], 3))
*/

// -----------------------------------------------------------

/*
// Convert the Set to an Array.
function myFunction (set) {
  //Array.from(set)

  return [...set]
}

console.log(myFunction(new Set([1, 2, 3])))
*/

// -----------------------------------------------------------

/*
function myFunction (a, b) {
  //return a < b ? true : false
  return a < b
}

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
)
console.log(
  myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))
)
console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
)
*/

// -----------------------------------------------------------

/*
function myFunction (a) {
  //   let count = 0

  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] < 0) count++
  //   }
  //   return count

  return a.filter(el => el < 0).length
}

console.log(myFunction([1, -2, 2, -4]))
*/

// -----------------------------------------------------------

/*
function myFunction (a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f
}

console.log(myFunction(1, 2, 7, 4, 5, 6))
*/

// -----------------------------------------------------------

/*
function myFunction (a) {
  //   let sum = 0
  //   for (let i = 0; i < a.length; i++) {
  //     sum += a[i]
  //   }
  //   return sum

  return a.reduce((acc, cur) => acc + cur, 0)
}

console.log(myFunction([1, 2, 3, 4, 5]))
*/

// -----------------------------------------------------------

/*
function myFunction (a) {
//   let res = Object.values(a)
//   return res.reduce((acc, cur) => acc + cur, 0)

return Object.values(a).reduce((sum, cur) => sum + cur, 0)

}
console.log(myFunction([1, 2, 3, 4, 5]))
*/

// -----------------------------------------------------------

/*
function myFunction (a, b) {
  //return a.includes(b) ? (b + a) : (a + b)
  return a.indexOf(b) === -1 ? a + b : b + a
}
console.log(myFunction('cheese', 'cake'))
console.log(myFunction('lips', 's'))
console.log(myFunction('Java', 'script'))
console.log(myFunction(' think, therefore I am', 'I'))
*/

// -----------------------------------------------------------

/*
function myFunction (set, val) {
  // const myIterator = set.values()
  // let s1 = new Set()

  // for (const entry of myIterator) {
  //   s1.add(entry)
  // }

  // s1.delete(val)

  // return s1

  set.delete(val)
  return set
}
console.log(myFunction(new Set('12345'), '3'))
console.log(myFunction(new Set([1, 2, 3]), 1))
*/

// -----------------------------------------------------------

/*
function myFunction (a, b) {
  return a.getTime() === b.getTime()
}

console.log(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
console.log(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))
*/

// -----------------------------------------------------------

function myFunction (a, n) {
  return a.slice(a.length - n)
  //return a.slice(-n);
}
