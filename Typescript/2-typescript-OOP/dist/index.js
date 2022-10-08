"use strict";
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
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, 'Kedar');
//# sourceMappingURL=index.js.map