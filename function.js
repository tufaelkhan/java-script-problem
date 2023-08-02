// function greeting(){
//     throw 'hello world'
// }
// function sayHi(){
//     try{
//         const data = greeting()
//         console.log('it worked!', data);
//     }catch(e){
//         console.log('oh no an error', e);
//     }
// }
// sayHi()

// function Car(){
//     this.make = 'lamborghini'
//     return {make:'maserati'}
// }
// const myCar = new Car();
// console.log(myCar.make);

// (() =>{
//     let x = (x = 10);
// })()
// console.log(typeof x);
// console.log(typeof y);

// class Dog{
//     constructor(name){
//         this.name = name;
//     }
// }
// Dog.prototype.bark = function(){
//     console.log(`woof I am ${this.name}`);
// }
// const pet = new Dog('mitu')
// pet.bark();
// delete Dog.prototype.bark;
// pet.bark()

// const set = new Set([2, 4, 6, 8, 10, 12])
// console.log(set);

// const name = 'tufael'
// const age = 23
// console.log(delete name);
// console.log(delete age);

// const numbers = [2, 3, 4, 6, 7, 8, 10, 34]
// const [y] = numbers;
// console.log(y);

// const user = {name: 'tufael', age: 23}
// const admin = {admin: true, ...user}
// console.log(admin);

// const person = {name: 'tufael'}
// Object.defineProperty(person, 'age', {value: 23})
// console.log(person);
// console.log(Object.keys(person));

// const setting = {
//     username: 'tufael khan',
//     level: 19,
//     health: 60,
// }
// const data = JSON.stringify(setting, ['level', 'health', 'username'])
// console.log(typeof data);

// let num = 10;
// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;
// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1)
// console.log(num1);
// console.log(num2);

// const value = {number: 10}
// const multiply = (x = {...value}) =>{
//     console.log(x.number *= 2);
// }
// multiply();
// multiply(value)
// multiply(value)
// multiply()

// [1, 2, 3, 4].reduce((x,y, z, a) => console.log(x,y, z, a))

// class Dog{
//     constructor(name){
//         this.name = name;
//     }
// }
// class Labrador extends Dog{
//     constructor(name, size){
//         this.size = size;
//     }
//     constructor(name, size){
//         super(name);
//         this.size = size;
//     }
//     constructor(size){
//         super(name)
//         this.size = size;
//     }
//     constructor(name, size){
//         this.name = name;
//         this.size = size;
//     }
// }

// console.log(Number(2) === Number(2));
// console.log(Boolean(false) === Boolean(false));
// console.log(Symbol('foo') === Symbol('foo'));

