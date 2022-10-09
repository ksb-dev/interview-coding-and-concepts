class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  add (value) {
    // creates a new node
    let node = new Node(value)

    // to store current node
    let current

    // if list is Empty add the
    // element and make it head
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next
      }

      // add node
      current.next = node
    }
    this.size++
  }

  printList () {
    let curr = this.head
    let str = ''

    while (curr) {
      str += curr.value

      if (curr.next) {
        str += ' --> '
      }
      curr = curr.next
    }
    console.log(str)
  }
}

const list = new LinkedList()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)

list.printList()
