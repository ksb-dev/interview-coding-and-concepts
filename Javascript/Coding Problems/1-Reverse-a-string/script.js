function reverse (str) {
  if (!str) {
    return 'String UNDEFINED'
  }

  if (typeof str !== 'string') {
    return 'Please pass a string'
  }

  if (str.length < 2) {
    return str
  }

  let reversedString = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }

  return reversedString
}

//const result = reverse()
//const result = reverse('K')
//const result = reverse(1)
const result = reverse('Hi, My name is KEDAR')

console.log(result)
console.log(result.split(''))
