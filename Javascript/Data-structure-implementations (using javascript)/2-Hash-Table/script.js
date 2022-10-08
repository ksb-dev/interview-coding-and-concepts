class HashTable {
  constructor (size) {
    this.data = new Array(size)
  }

  _hash (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set (key, value) {
    let address = this._hash(key)

    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])

    return this.data
  }

  get (key) {
    let address = this._hash(key)

    const currentBucket = this.data[address]

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  keys () {
    const keysArray = []

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }

    return keysArray
  }
}

const myHashTable = new HashTable(50)

const data1 = myHashTable.set('grapes', 10000)
//console.log(data1)

const data2 = myHashTable.set('apples', 9)
//console.log(data2)

const value1 = myHashTable.get('grapes')
//console.log(value1)

const value2 = myHashTable.get('apples')
//console.log(value2)

const keys = myHashTable.keys()
//console.log(keys)

function firstRecurringCharacter (input) {
  let map = new Map()

  for (let i = 0; i < input.length; i++) {
    //console.log(map[input[i]])
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
  }
  return 'undefined'
}
//firstRecurringCharacter([2, 1, 1])

console.log(firstRecurringCharacter([9, 1, 3, 2, 4, 9, 1, 4]))
