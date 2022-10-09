class MyArray {
  constructor () {
    this.length = 0
    this.data = {}
  }

  push (item) {
    this.data[this.length] = item
    this.length++

    return this.length
  }

  pop () {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]

    this.length--

    return lastItem
  }

  shift () {
    const firtItem = this.data[0]
    delete this.data[0]

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]

    this.length--

    return firtItem
  }

  unshift (item) {
    this.length++

    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = item

    return this.length
  }

  get (index) {
    return this.data[index]
  }

  insertAt (item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[index] = item

    this.length++

    return this.data
  }

  deleteAt (index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]

    this.length--

    return this.data
  }
}

const newArray = new MyArray()

newArray.push(2)
newArray.push(3)
newArray.push(4)
console.log(newArray)

// newArray.pop()
// console.log(newArray)

// newArray.shift()
// console.log(newArray)

// newArray.unshift(1)
// console.log(newArray)

// newArray.insertAt(5, 2)
// console.log(newArray)

newArray.deleteAt(1)
console.log(newArray)

// console.log(newArray.get(0))
