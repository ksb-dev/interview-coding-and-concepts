// Ex --> 1 : Extract first 3 elements of array

/*
function myFunction (a) {
  return a.slice(0, 3)
}

console.log(myFunction([1, 2, 3, 4, 5]))
*/

// --------------------------------------------------
// Ex --> 2 : Remove first 3 elements of array

/*
function myFunction (a) {
  return a.slice(3)
}

console.log(myFunction([1, 2, 3, 4, 5]))
*/

// --------------------------------------------------
// Ex --> 3 : Get last 3 elements of array

/*
function myFunction (a) {
  return a.slice(-3)
}

console.log(myFunction([1, 2, 3, 4, 5]))
*/

// --------------------------------------------------
// Ex --> 4 : Get last n elements of array

/*
function myFunction (a, n) {
  return a.slice(-n)
}

console.log(myFunction([1, 2, 3, 4, 5], 2))
*/

// --------------------------------------------------
// Ex --> 5 : Remove all elements equal to 'b' from the array

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

// --------------------------------------------------
// Ex --> 6 : Return count of negative values

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
// Ex --> 7 : Calculate sum of array

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
// Ex --> 8 : Avg of array sum

/*
function myFunction (arr) {
  //   let sum = 0

  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i]
  //   }
  //   return sum / arr.length

  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
console.log(myFunction([10, 100, 40]))
*/

// -----------------------------------------------------------
// Ex --> 9 : Return longest string

/*
function myFunction (arr) {
  //   let longest = 0
  //   let res = ''

  //   for (let i = 0; i < arr.length; i++) {
  //     let length = arr[i].length
  //     console.log(length)
  //     if (length > longest) {
  //       longest = length
  //       res = arr[i]
  //     }
  //   }
  //   return res

  return arr.reduce((a, b) => (a.length <= b.length ? b : a))
}

console.log(myFunction(['help', 'me']))
console.log(myFunction(['I', 'need', 'candy']))
*/

// -----------------------------------------------------------
// Ex --> 10 : Return true if every elements in array are equal

/*
function myFunction (arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] !== arr[i + 1]) {
  //       return false
  //     }
  //   }
  //   return true

  return new Set(arr).size === 1
}

console.log(myFunction([true, true, true, true]))
console.log(myFunction(['10', 10, 10, 10]))
*/

// -----------------------------------------------------------
// Ex --> 11 : Merge an arbitrary number of arrays

/*
function myFunction (...arrays) {
  //   let merge = []
  //   for (let i = 0; i < arguments.length; i++) {
  //     merge = merge.concat(arguments[i])
  //   }
  //   return merge

  return arrays.flat()
}
console.log(myFunction([1, 2, 3], [4, 5, 6]))
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]))
console.log(myFunction([true, true], [1, 2], ['a', 'b']))
*/

// -----------------------------------------------------------
// Ex --> 12 : Sort the array by property b in ascending order

/*
function myFunction (arr) {
  // let b1 = arr[0].b
  // let b2 = arr[1].b
  // let res = []

  // if (b1 > b2) {
  //   res.push(arr[1])
  //   res.push(arr[0])
  //   return res
  // }
  // return arr

  const sort = (x, y) => x.b - y.b
  return arr.sort(sort)
}
console.log(
  myFunction([
    { a: 1, b: 2 },
    { a: 5, b: 4 }
  ])
)
console.log(
  myFunction([
    { a: 2, b: 10 },
    { a: 5, b: 4 }
  ])
)
console.log(
  myFunction([
    { a: 1, b: 7 },
    { a: 2, b: 1 }
  ])
)
*/

// -----------------------------------------------------------
// Ex --> 13 : Merge both arrays and remove duplicate values. Sort the merge result in ascending order

/*
function myFunction (a, b) {
  // let res = []

  // for (let i = 0; i < a.length; i++) {
  //   if (!res.includes(a[i])) res.push(a[i])
  //   if (!res.includes(b[i])) res.push(b[i])
  // }
  // return res.sort(function (a, b) {
  //   return a - b
  // })

  return [...new Set([...a, ...b])].sort((x, y) => x - y)
}

console.log(myFunction([1, 2, 3], [3, 4, 5]))
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))
*/

// -----------------------------------------------------------
// Ex --> 14 :
