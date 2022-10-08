// -------------------------------------------------
// 1.  CREATING CLASSES
// -------------------------------------------------

// class BankAccount {
//   id: number
//   owner: string
//   balance: number

//   constructor (id: number, owner: string, balance: number) {
//     this.id = id
//     this.owner = owner
//     this.balance = balance
//   }

//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }
// }

// let kedar = new BankAccount(1, 'Kedar', 15_000)
// kedar.deposit(7000)

// console.log(kedar.balance)
// console.log(typeof kedar)
// console.log(kedar instanceof BankAccount)

// -------------------------------------------------
// 2. READ ONLY AND OPTIONAL PROPERTIES
// -------------------------------------------------

// class BankAccount {
//   readonly id: number
//   owner: string
//   balance: number
//   nickname?: string

//   constructor (id: number, owner: string, balance: number) {
//     this.id = id
//     this.owner = owner
//     this.balance = balance
//   }

//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }
// }

// let kedar = new BankAccount(1, 'Kedar', 15_000)

//kedar.id = 10 // Error because id is declared as "readonly" so you can assign a value to id only in constructor

// -------------------------------------------------
// 3. ACCESS CONTROL KEYWORDS
// -------------------------------------------------

// class BankAccount {
//   readonly id: number
//   owner: string
//   private balance: number
//   nickname?: string

//   constructor (id: number, owner: string, balance: number) {
//     this.id = id
//     this.owner = owner
//     this.balance = balance
//   }

//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }

//   getBalance (): number {
//     return this.balance
//   }
// }

// let kedar = new BankAccount(1, 'Kedar', 15_000)

// console.log(kedar.getBalance())

// -------------------------------------------------
// 4. PARAMETER PROPERTIES
// -------------------------------------------------

// class BankAccount {
//   nickname?: string

//   constructor (
//     public readonly id: number,
//     public owner: string,
//     private balance: number
//   ) {}

//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }

//   getBalance (): number {
//     return this.balance
//   }
// }

// let kedar = new BankAccount(1, 'Kedar', 15_000)

// -------------------------------------------------
// 5. GETTERS AND SETTERS
// -------------------------------------------------

// class BankAccount {
//   nickname?: string

//   constructor (
//     public readonly id: number,
//     public owner: string,
//     private balance: number
//   ) {}

//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }

//   getBalance (): number {
//     return this.balance
//   }

//   setBalance (value: number): void {
//     if (value < 0) throw new Error('Invalid Value!')
//     this.balance = value
//   }
// }

// let kedar = new BankAccount(1, 'Kedar', 15_000)

// console.log(kedar.getBalance())
// kedar.setBalance(20_000)
// console.log(kedar.getBalance())

// -------------------------------------------------
// 6. INDEX SIGNATURES
// -------------------------------------------------

// class SeatAssignment {
//   [seatNumber: string]: string
// }

// let seats = new SeatAssignment()
// seats.A1 = 'Kedar'
// // OR
// //seats['A1'] = "Kedar"
// seats.A2 = 'John'

// -------------------------------------------------
// 7. STATIC MEMBERS
// -------------------------------------------------

//----- ex-1 -----:

// class Ride {
//   activeRides: number = 0

//   start () {
//     this.activeRides++
//   }

//   stop () {
//     this.activeRides--
//   }
// }

// let ride1 = new Ride()
// ride1.start()

// let ride2 = new Ride()
// ride2.start()

// console.log(ride1.activeRides)
// console.log(ride2.activeRides)

//----- ex-2 -----:

// class Ride {
//   private static _activeRides: number = 0

//   start () {
//     Ride._activeRides++
//   }

//   stop () {
//     Ride._activeRides--
//   }

//   static get activeRides (): number {
//     return Ride._activeRides
//   }
// }

// let ride1 = new Ride()
// ride1.start()

// let ride2 = new Ride()
// ride2.start()

// console.log(Ride.activeRides)

// -------------------------------------------------
// 8. INHERITANCE
// -------------------------------------------------

// class Person {
//   constructor (public firstName: string, public lastName: string) {}

//   get fullName (): string {
//     return this.firstName + ' ' + this.lastName
//   }

//   walk () {
//     console.log('Walking')
//   }
// }

// class Student extends Person {
//   constructor (public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName)
//   }

//   takeTest () {
//     console.log('Taking a test')
//   }
// }

// let student = new Student(1, 'Kedar', 'Babaleshwar')

// console.log(student.studentId)
// console.log(student.firstName)
// console.log(student.lastName)
// console.log(student.fullName)
// console.log(student.walk())
// console.log(student.takeTest())

// -------------------------------------------------
// 9. METHOD OVERRIDING
// -------------------------------------------------

// class Person {
//   constructor (public firstName: string, public lastName: string) {}

//   get fullName (): string {
//     return this.firstName + ' ' + this.lastName
//   }

//   walk () {
//     console.log('Walking')
//   }
// }

// class Student extends Person {
//   constructor (public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName)
//   }

//   takeTest () {
//     console.log('Taking a test')
//   }
// }

//class Teacher extends Person {
// if you uncomment ""noImplicitOverride": true" below you'll get error (below code is not recommended)
//   get fullName (): string {
//     return 'Professor ' + super.fullName
//   }

// OR

// Recommended
//   override get fullName (): string {
//     return 'Professor ' + super.fullName
//   }
// }

// let teacher = new Teacher('Kedar', 'Babaleshwar')
// console.log(teacher.fullName)

// -------------------------------------------------
// 10. POLYMORPHISM
// -------------------------------------------------

// class Person {
//   constructor (public firstName: string, public lastName: string) {}

//   get fullName (): string {
//     return this.firstName + ' ' + this.lastName
//   }

//   walk () {
//     console.log('Walking')
//   }
// }

// class Student extends Person {
//   constructor (public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName)
//   }

//   takeTest () {
//     console.log('Taking a test')
//   }
// }

// class Teacher extends Person {
//   override get fullName (): string {
//     return 'Professor ' + super.fullName
//   }
// }

// class Principal extends Person {
//   override get fullName (): string {
//     return 'Principal ' + super.fullName
//   }
// }

// printNames([
//   new Student(1, 'Kedar', 'Babaleshwar'),
//   new Teacher('John', 'Smith'),
//   new Principal('James', 'Bond')
// ])

// function printNames(people: Person[]) {
//   for(let person of people) {
//     console.log(person.fullName)
//   }
// }

// -------------------------------------------------
// 11. PRIVATE VS PROTECTED
// -------------------------------------------------

// class Person {
//   constructor (public firstName: string, public lastName: string) {}

//   get fullName (): string {
//     return this.firstName + ' ' + this.lastName
//   }

//   private walk () {
//     console.log('Walking')
//   }

//   protected run () {
//     console.log('Running')
//   }
// }

// class Student extends Person {
//   constructor (public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName)
//   }

//   takeTest () {
//     // this.walk() // private members are not inherited
//     this.run() // protected members can be inherited
//     console.log('Taking a test')
//   }
// }

// class Teacher extends Person {
//   override get fullName (): string {
//     return 'Professor ' + super.fullName
//   }
// }

// class Principal extends Person {
//   override get fullName (): string {
//     return 'Principal ' + super.fullName
//   }
// }

// -------------------------------------------------
// 12. ABSTRACT CLASSES AND METHODS
// -------------------------------------------------

// abstract class Shape {
//   constructor (public color: string) {}

//   abstract render (): void
// }

// class Circle extends Shape {
//   constructor (protected readonly radius: number, color: string) {
//     super(color)
//   }

//   render () {
//     console.log('Rendering a circle')
//   }
// }

// class Square extends Shape {
//   constructor (protected readonly side: number, color: string) {
//     super(color)
//   }

//   render () {
//     console.log('Rendering a square')
//   }
// }

// // let shape = new Shape() // It is not possible to create an instance of abstract class
// let circle = new Circle(5, 'red')

// console.log(circle.render())

// -------------------------------------------------
// 13. INTERFACES
// -------------------------------------------------

// abstract class Calender {
//   constructor(public name: string){}

//   abstract addEvent(): void
//   abstract removeEvent(): void
// }

// interface Calender {
//   name: string
//   addEvent(): void
//   removeEvent(): void
// }

// interface cloudCalender extends Calender {
//   sync(): void
// }

// class GoogleCalender implements Calender, cloudCalender {
//   // (cntrl + .) to automaticaly implement interfaces
//   constructor (public name: string) {}

//   addEvent (): void {
//     throw new Error('Method not implemented.')
//   }

//   removeEvent (): void {
//     throw new Error('Method not implemented.')
//   }

//   sync (): void {
//     throw new Error('Method not implemented.')
//   }

//   // constructor (public name: string) {}

//   // addEvent () {
//   //   console.log('Google Calender Add Event Logic')
//   // }

//   // removeEvent () {
//   //   console.log('Google Calender Remove Event Logic')
//   // }

//   // sync () {
//   //   console.log('Google Calender SyncLogic')
//   // }
// }

// -------------------------------------------------
// 14. GENERICS (GENERIC CLASSES)
// -------------------------------------------------

// class KeyValuePair<K, V> {
//   constructor (public key: K, public value: V) {}
// }

// //let pair = new KeyValuePair<number, string>(1, 'Kedar') // recommended
// let pair = new KeyValuePair(1, 'Kedar') // not recommended

// -------------------------------------------------
// 15. GENERIC FUNCTIONS
// -------------------------------------------------

// class ArrayUtils {
//   static wrapInArray<T> (value: T): Object {
//     return [value]
//   }
// }

// let numbers = ArrayUtils.wrapInArray(1)

// -------------------------------------------------
// 16. GENERIC INTERFACES
// -------------------------------------------------

// interface Result<T> {
//   data: T | null
//   error: string | null
// }

// function fetch<T> (url: string): Result<T> {
//   return { data: null, error: null }
// }

// interface User {
//   userName: string
// }

// interface Product {
//   title: string
// }

// // let result = fetch<User>('url')
// // result.data?.userName

// let result = fetch<Product>('url')
// result.data?.title

// -------------------------------------------------
// 16. GENERIC CONSTRAINTS
// -------------------------------------------------

//----- ex-1 -----:

// function echo<T extends number | string> (value: T): T {
//   return value
// }

// echo(true) // error because only number | string type allowed

// function echo<T extends {name: string}> (value: T): T {
//   return value
// }

// echo({name: "Kedar"})

//----- ex-2 -----:

// interface Person {
//   name: string
// }

// function echo<T extends Person> (value: T): T {
//   return value
// }

// class Student implements Person {
//   constructor (public name: string) {}
// }

// echo(new Student('Kedar'))

// -------------------------------------------------
// 17. EXTENDING GENERIC CLASSES
// -------------------------------------------------

// interface Product {
//   name: string
//   price: number
// }

// class Store<T> {
//   protected objects: T[] = []

//   add (obj: T): void {
//     this.objects.push(obj)
//   }
// }

// // Pass on the generic type parameter
// class CompressibleStore<T> extends Store<T> {
//   compress () {}
// }

// // let store = new CompressibleStore<Product>()
// // store.add({ name: 'abc', price: 100 })
// // store.compress()

// // Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   search (name: string): T | undefined {
//     return this.objects.find(obj => obj.name === name)
//   }
// }

// // Fix the generic type parameter
// class ProductStore extends Store<Product> {
//   filterByCategory (categgory: string): Product[] {
//     return []
//   }
// }

// -------------------------------------------------
// 18. THE keyof OPERATOR
// -------------------------------------------------

// interface Product {
//   name: string
//   price: number
// }

// class Store<T> {
//   protected objects: T[] = []

//   add (obj: T): void {
//     this.objects.push(obj)
//   }

//   // find(property: string, value: unknown): T | undefined {
//   //   return this.objects.find(obj => obj[property] === value)
//   // }

//   // T is Product
//   // keyof T --> 'name' | 'price'
//   find (property: keyof T, value: unknown): T | undefined {
//     return this.objects.find(obj => obj[property] === value)
//   }
// }

// let store = new Store<Product>()
// store.add({ name: 'abc', price: 1 })
// store.find('name', 'abc')
// store.find('price', 1)
// //store.find('nonExistingProperty', 2)

// -------------------------------------------------
// 19. TYPE MAPPING
// -------------------------------------------------

//----- ex-1 -----:

// interface Product {
//   name: string
//   price: number
// }

// // interface ReadOnlyProduct {
// //   readonly name: string
// //   readonly price: number
// // }

// // Instead of writing above code write like following one because it reduces repetative code
// type ReadOnlyProduct = {
//   readonly [K in keyof Product]: Product[K]
// }

// let product: ReadOnlyProduct = {
//   name: 'abc',
//   price: 1
// }

// //product.name = 'xyz' // error because it is readonly property

//----- ex-2 -----: (Generic type mapping)

// interface Product {
//   name: string
//   price: number
// }

// type ReadOnly<T> = {
//   readonly [K in keyof T]: T[K]
// }

// type Optional<T> = {
//   [K in keyof T]?: T[K]
// }

// type Nullable<T> = {
//   [K in keyof T]: T[K] | null
// }

// let product1: ReadOnly<Product> = {
//   name: 'abc',
//   price: 1
// }

// let product2: Optional<Product> = {}

// let product3: Nullable<Product> = {
//   name: null,
//   price: null
// }
