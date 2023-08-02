// function greeting(){
//     throw 'hello world'
// }
// function sayHi(){
//     try{
//         const data = greeting();
//         console.log('it worked ', data);
//     }catch(e){
//         console.log('oh no an error', e);
//     }
// }
// sayHi()

// function Car(){
//     this.make = 'Lamborghini'
//     return {make: 'Maserati'}
// }
// const myCar = new Car();
// console.log(myCar.make);

// class Dog{
//     constructor(name){
//         this.name = name
//     }
// }
// Dog.prototype.bark = function(){
//     console.log(`woof I am ${this.name}`);
// }
// const pet = new Dog('mira')
// pet.bark();
// delete Dog.prototype.bark;
// pet.bark();

// const set = new Set([2, 12, 4, 6, 8, 10, 12, 10, 4])
// console.log(set);

// const name = 'tufael'
// let age = 23
// console.log(delete name);
// console.log(delete age);

// const numbers = [3, 5, 64, 235, 64]
// const [y] = numbers;
// console.log(y);

// const user = {name: 'tufael', age: 23}
// const admin = {admin: true, ...user}
// console.log(admin);

// const person = {name: 'tufael'}
// Object.defineProperty(person, 'age', {value: 23})
// console.log(person);
// console.log(Object.keys(person));

// const setting ={
//     username: 'tufael',
//     level: 20,
//     health: 60,
// }
// const data = JSON.stringify(setting, ['level', 'health'])
// console.log(data);

// let num = 20;
// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;
// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1)
// console.log(num1);
// console.log(num2);

// const value = {number: 10}
// const multiply = (x = {...value}) =>{
//     console.log((x.number *= 2));
// }
// multiply();
// multiply(value)
// multiply()
// multiply(value)

// [1,3, 4, 6, 8].reduce((x, y) => console.log(x, y))

console.log(Number(2) === Numbaer(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
