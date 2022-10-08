// npm i -g typescript

let age: number = 20

if (age < 50) {
  age += 10
}

// tsc --int (configuring typescript compiler)

//console.log(age)

// --> BUILT-IN-TYPES IN TYPESCRIPT

// (includes javascript types also because typescript is built on top of javascript or you can say typescript is superset of javascript)

// 1. any
// 2. unknown
// 3. never
// 4. enum
// 5. tuple

// let sales: number = 123_456_789
// let course: string = 'Typescript'
// let is_published: boolean = true
// let level

// or

let sales = 123_456_789
//sales = 'e' // type error
let course = 'Typescript'
let is_published = true

// ----------------------------------------------------------------

// --> THE ANY TYPE

let level
level = 1
level = 'Kedar'

// Note: You can assign number, string ... to a "any" type , but it is against the idea of typescript because we use typescript for type safety

// function render(document) {
//     console.log(document)
// }

// to remove error you can use "document: any" or set noImplicity: false in tsconfig.json file

function render (document: any) {
  console.log(document)
}

// ----------------------------------------------------------------

// --> ARRAYS

//Note : when you assign empty array to a variable you must mention it's type otherwise compiler will think is is of type "any"

let array: number[] = []

let numberArray: number[] = [1, 2, 3] // type error
numberArray.forEach(n => {
  return n
  //console.log(n.toString())
})

// ----------------------------------------------------------------

// --> TUPLES

// A tuple is a typed array with a pre-defined length and types for each index.

let user: [number, string] = [5, 'Kedar']
//user.push(1) // Here compiler doesn't complain (should be solved in near future)

// Note: recommended to restrict length of tuple to 2

// ----------------------------------------------------------------

// --> ENUMS

enum Height {
  Small,
  Medium,
  Large
}

let myHeight: Height = Height.Medium

//console.log(myHeight)

// If use prefix enum with const compiler will generate more optimized code in index.js

const enum Size {
  Small = 1,
  Medium,
  Large
}

let mySize: Size = Size.Medium

//console.log(mySize)

// ----------------------------------------------------------------

// --> FUNCTIONS

function calculateTax1 (income: number, taxYear: number): number {
  //let x
  if (taxYear < 2022) return income * 1.2
  return income * 1.3
}
//calculateTax1('a', 2022)
//calculateTax1(10_000)
calculateTax1(10_000, 2022)

function calculateTax2 (income: number, taxYear?: number): number {
  //let x
  if ((taxYear || 2021) < 2022) return income * 1.2
  return income * 1.3
}
calculateTax2(10_000)

function calculateTax3 (income: number, taxYear = 2021): number {
  //let x
  if (taxYear < 2022) return income * 1.2
  return income * 1.3
}
calculateTax3(10_000)
calculateTax3(10_000, 2020) // This "2020" will override default taxYear value "2021"

/*
"noUnusedParameters": true
"noImplicitReturns": true
"noUnusedLocals": true
*/

// ----------------------------------------------------------------

// --> Objects

let employee1: { id: number; name?: string } = { id: 1 }
// If you don't specify name make it optional but that is not recommended

let employee2: { id: number; name: string } = { id: 1, name: 'Kedar' }
employee2.id = 3

// If you don't want to modify object property id then use readonly
let employee3: { readonly id: number; name: string } = { id: 1, name: 'Kedar' }
//employee3.id = 3

// Adding methods
let employee4: {
  readonly id: number
  name: string
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'Kedar',
  retire: (date: Date) => {
    console.log(date)
  }
}

// ----------------------------------------------------------------

// --> TYPE ALIASES

type Employee = {
  readonly id: number
  name: string
  retire: (date: Date) => void
}

let employee5: Employee = {
  id: 1,
  name: 'Kedar',
  retire: (date: Date) => {
    console.log(date)
  }
}

// ----------------------------------------------------------------

// --> UNION TYPES

function kgToLbs (weight: number | string) {
  // Narrowing
  if (typeof weight === 'number') return weight * 2.2
  else return parseInt(weight) * 2.2
}

//console.log(kgToLbs(54))
//console.log(kgToLbs('54'))

// ----------------------------------------------------------------

// --> INTERSECTION TYPES

type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// ----------------------------------------------------------------

// --> LITERAL TYPES

// let quantity: 50 = 51 // Error

type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

// ----------------------------------------------------------------

// --> NULLABLE TYPES

// function greet (name: string ) {
//   if (name) console.log(name)
//   else console.log('Ola')
// }
// greet(null)

// If we uncomment "strictNullChecks" and set it to false we will not get error

// function greet (name: string | null | undefined) {
//   if (name) console.log(name)
//   else console.log('Ola')
// }

// greet(null)

// ----------------------------------------------------------------

// --> OPTIONAL CHAINING

// type Customer = {
//   birthday: Date
// }

// function getCustomer (id: number): Customer | null {
//   return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer(0)

//console.log(customer.birthday) // Error
//console.log(customer?.birthday) // "?" optional property access operator

type Customer = {
  birthday?: Date
}

function getCustomer (id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)

//console.log(customer?.birthday.getFullYear()) // Error
//console.log(customer?.birthday?.getFullYear())

//optional element access operator
//customer?.[0]

// optional call
let log: any = null
log?.('a')

// ----------------------------------------------------------------

// --> NULLISH COAELSCING OPERATOR

let speed: number | null = null

let ride = {
  // Falsy(null, undefined, false, '', 0)
  //speed:speed || 30 // if you pass falsy values, it is ignored and speed value becomes 30
  speed: speed ?? 30 // here if your value not null or undefined that value will be assigned
}

// ----------------------------------------------------------------

// --> TYPE ASSERTIONS

//let phone = document.getElementById('phone') as HTMLInputElement

// OR

let phone = <HTMLInputElement>document.getElementById('phone')

phone.value

// ----------------------------------------------------------------

// --> THE UNKNOWN TYPE

// function unknown(document: any) {
//   document.move()
//   document.fly()
//   document.whatevetWeWant()
// }

// Here we get error, because of type 'unknown'

// function unknown (document: unknown) {
//   document.move()
//   document.fly()
//   document.whatevetWeWant()
// }

// ----------------------------------------------------------------

// --> THE NEVER TYPE

// function processEvents () {
//   while (true) {
//     // Read message from queue
//   }
// }

// processEvents()
// console.log('Never Reachable Code')

// make "allowUnreachableCode": false
// function processEvents (): never {
//   while (true) {
//     // Read message from queue
//   }
// }

// processEvents()
// console.log('Never Reachable Code')
