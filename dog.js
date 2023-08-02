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
//         this.size = size
//     }
//     constructor(size){
//         super(this.name)
//         this.size = size;
//     }
//     constructor(name, size){
//         this.name = name;
//         this.size = size;
//     }
// }

// console.log(Number(2) === Number(4));
// console.log(Boolean(false) === Boolean(true));
// console.log(Symbol('foo') = Symbol('foo'));

// const name = 'tufael khan'
// console.log(name.padStart(50));
// console.log(name.padStart(2));

// function startGame(){
//     const answer = yield 'do you love javascript'
//     if(answer !== 'yes'){
//         return 'oh wow.. guess we are done here'
//     }
//     return 'javascript loves you back'
// }
// const game = startGame();
// console.log(/*1*/);
// console.log(/*2*/);

// console.log(String.raw `hello/nworld`);

// async function getData(){
//     return await Promise.resolve('I made it')
// }
// const data = getData();
// console.log(data);

// function addToList(item, list){
//     return list.push(item)
// }
// const result = addToList('apple', ['banana'])
// console.log(result);

// const box = {x: 10, y: 20}
// Object.freeze(box)
// const shape = box;
// shape.x = 100;
// console.log(shape);

// const {firstName: myName} = {firstName: 'tufael'}
// console.log(firstName);

// function sum(a, b){
//     return a+b;
// }
// console.log(sum(20, 30));

// const add = () =>{
//     const cache = {};
//     return num =>{
//         if(num in cache){
//             return `From cache! ${cache[num]}`
//         }else{
//             const result = num + 10;
//             cache[num] = result;
//             return `calculated! ${result}`
//         }
//     }
// }
// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(25));
// console.log(addFunction(4*2));

// const myLifeSumedUp = ['tufael', 'khan', 'tufael', 'mehedi', 'khan']
// for(let item in myLifeSumedUp){
//     console.log(item);
// }
// for (let item of myLifeSumedUp){
//     console.log(item);
// }

// const list =[1+3, 3*3, 6/2]
// console.log(list);

// function sayHi(name){
//     return `Hi there, ${name}`
// }
// console.log(sayHi('tufael khan'));

// let status = 'tu'
// setTimeout(() =>{
//     const status = 'fa'
//     const data = {
//         status: 'el',
//         getStatus(){
//             return this.status;
//         }
//     }
//     console.log(data.getStatus());
//     console.log(data.getStatus.call(this));
// }, 0)

// const person = {
//     name: 'tufael',
//     age: 23,
//     town: 'chandpur',
// }
// let city = person.city;
// city = 'chandpur'
// console.log(person);

// function checkAge(age){
//     if(age< 18){
//         const message = 'sorry, you are too young'
//     }else{
//         const message = 'yay you are old enough'
//     }
//     return message
// }
// console.log(checkAge(23));

// console.log('tufael khan'[5]);

// function sum(num1, num2 = num1){
//     console.log(num1 + num2);
// }
// console.log(sum(20));

// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
// const member = new Person('tufael')
// console.log(typeof member);

// let newList = [3,5, 7].push(9)
// console.log(newList.push(100));

// function giveLydiaPizza(){
//     return 'hello and welcome to pizza hunt'
// }
// const giveLydiaChocolate = () =>{
//     return 'here is chocolate... now go hit the gym already'
// }
// console.log(giveLydiaPizza.prototype);
// console.log(giveLydiaChocolate.prototype);

// const person = {
//     name: 'tufael',
//     age: 23,
// }
// for (const [x, y] of Object.entries(person)){
//     console.log(x, y);
// }

// function getItems(fruitList, args, favoriteFruit){
//     return [...fruitList, ...args, favoriteFruit]
// }
// console.log(getItems(['banana', 'apple'], 'pear', 'orange'));

// function nums(a, b){
//     if(a> b) console.log('a is higger');
//     else console.log('b is bigger');
//     return a+b;
// }
// console.log(nums(4, 7));
// console.log(nums(17, 10));

// class Person{
//     constructor(){
//         this.name = 'tufael';
//     }
// }
// Person = class AnotherPerson{
//     constructor(){
//         this.name = 'khan';
//     }
// }
// const member = new Person();
// console.log(member.name);

// const info = {
//     [Symbol('a')]: 'b',
// }
// console.log(info);
// console.log(Object.keys(info));

// const getList = ([x, ...y]) => [x, y]
// const getUser = user => {name; user.name, age; user.age}
// const list = [3, 4, 5, 6, 7]
// const user = {name: 'tufael', age: 23}
// console.log(getList(list));
// console.log(getUser(user));

// const name = 'tufael'
// console.log(name);

// const one = false || {} || null;
// const two = null || false || '';
// const three = [] || 0 || true;
// console.log(one, two, three);

// const myPromise = () => Promise.resolve('I have resolved')
// function firstFunction(){
//     myPromise(). then(res => console.log(res))
//     console.log('second');
// }
// async function secondFunction(){
//     console.log(await myPromise());
//     console.log('second');
// }
// firstFunction()
// secondFunction()

// const set = new Set();
// set.add(3)
// set.add('tufael')
// set.add({name: 'tufael'})
// for (let item of set){
//     console.log(item + 2);
// }

// Promise.resolve(5)

// function compareMembers(person1, person2 = person1){
//     if(person1 !== person2){
//         console.log('Not the same!');
//     }else{
//         console.log('they are the same!');
//     }
// }
// const person = {name: 'tufael'}
// compareMembers(person)

// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
// }
// const colors = ['pink', 'red', 'blue']
// console.log(colorConfig.colors[1]);

// let name = 'tufael';
// function getName(){
//     console.log(name);
//     let name = 'khan'
// }
// console.log(getName());

// function generatorOne(){
//     yield ['a', 'b', 'c']
// }
// function generatorTwo(){
//     yield ['a', 'b', 'c']
// }
// const one = generatorOne();
// const two = generatorTwo()
// console.log(one.next().value);
// console.log(two.next().value);

// console.log(`${(x => x)('I love')} to program`);

// let config = {
//     alert: setInterval(() =>{
//         console.log('Alert!');
//     }, 2000)
// }
// config = null

// const myMap = new Map()
// const myFunc = () => 'greeting'
// myMap.set(myFunc, 'hello world')
// myMap.get('greeting')
// myMap.get(myFunc)
// myMap.get(() => 'greeting')

// const person = {
//     name: 'tufael',
//     age: 23,
// }
// const changeAge = (x = {...person}) => (x.age += 1)
// const changeAgeAndName = (x = {...person}) => {
//     x.age += 1;
//     x.name = 'khan'
// }
// changeAge(person)
// changeAgeAndName()
// console.log(person);

// function sumValues(x,y,z){
//     return x+y+z;
// }
// console.log(sumValues(10, 4, 20));

// let num = 2;
// const  list = ['habib', 'polash', 'jahid', 'rezaul', 'sujoy']
// console.log(list[(num += 1)]);

// const person = {
//     firstName: 'tufael',
//     lastName: 'khan',
//     pet:{
//         name: 'kutu',
//         breed: 'bokku'
//     },
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person.pet?.name);
// console.log(person.pet?.family?.name);
// console.log(person.getFullName?.());
// console.log(member.getLastName?.());

// const groceries = ['banana', 'apple', 'coconut']
// if(groceries.indexOf('banana')){
//     console.log('we have to buy bananas');
// }else{
//     console.log('we do not have to buy babanas');
// }

// const config = {
//     language: [],
//     set language(lang){
//         return this.language.push(lang)
//     }
// }
// console.log(config.language);

// const name = 'tufael khan'
// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');

// const add = x => y => z =>{
//     console.log(x, y, z);
//     return x+y+z;
// }
// add(3)(4)(8)

// async function range(start, end){
//     for (let i = start; i <= end; i++){
//         yield Promise.resolve(i)
//     }
// }
// (async () => {
//     const gen = range(3, 5)
//     for await (const item of gen){
//         console.log(item);
//     }
// })()

// const myFunc = ({x, y, z}) => {
//     console.log(x, y, z);
// }
// myFunc(6, 3, 8)

// function getFine(speed, amount){
//     const formattedSpeed = new Int1.NumberFormat('en-US',{
//         style: 'unit',
//         unit: 'mile-per-hour'
//     }).format(speed)

//     const formattedAmount = new Int1.NumberFormat('en-US',{
//         style: 'currency',
//         currency: 'USD'
//     }).format(amount)
//     return `the driver drove ${formattedSpeed} and has to pay ${formattedAmount}`
// }
// console.log(getFine(130, 300));

// const name = 'tufael khan'
// const age = 23
// console.log(Number.isNaN(name));
// console.log(Number.isNaN(age));
// console.log(isNaN(name));
// console.log(isNaN(age));

// const randomValue = 23
// function getInfo(){
//     console.log(typeof randomValue);
//     const randomValue = 'tufael khan'
// }
// getInfo()

// const myPromise = Promise.resolve('woah some cool data')
// (async () =>{
//     try{
//         console.log(await myPromise);
//     }catch{
//         throw new Error(`Oops did not work`)
//     }finally{
//         console.log('Oh finally');
//     }
// })()

// class Counter{
//     constructor(){
//         this.count = 0;
//     }
//     increment(){
//         this.count++;
//     }
// }
// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment()
// console.log(counterOne.count);

// const myPromise = Promise.resolve(Promise.resolve('Promise'))
// function funcOne(){
//     setTimeout(()=> console.log('TimeOut 1!'), 0)
//     myPromisel.then(res => res).then(res => console.log(`${res} 1!`))
//     console.log('Last line 1');
// }

// async function funcTwo(){
//     const res = await myPromise;
//     console.log(`${res} 2!`);
//     setTimeout(() => console.log('Timeout 2!'), 0)
//     console.log('Last line 2!');
// }
// funcOne()
// funcTwo()

// const handler = {
//     set: () => console.log('added a new property!'),
//     get: () => console.log('accessed a property!')
// }
// const person = new Proxy({}, handler)
// person.name = 'tufael'
// person.name;

// const person = {name: 'tufael khan'}
// Object.seal(person)

// const person = {
//     name: 'tufael khan',
//     address: {
//         street: '100 Main st',
//     }
// }
// Object.freeze(person)

// const add = x => x+x;
// function myFunc(num = 2, value = add(num)){
//     console.log(num, value);
// }
// myFunc()
// myFunc(3)

// class Counter{
//     #number = 10
//     increment(){
//         this.#number++
//     }
//     getNum(){
//         return this.#number
//     }
// }
// const counter = new Counter()
// counter.increment()
// console.log(counter);

// let khan = new Object()
// let tufael = Object.create(null)
// let mehedi = {
//     name: 'tufael',
//     age:23,
//     address: 'chandpur',
// }

// function Person(name){
//     this.name = name;
//     this.age = 23;
// }
// let tufael = new Person('tufael')
// console.log(tufael);

// function Person(){}
// Person.prototype.name = 'tufael';
// let khan = new Person()

// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
// let tufael = new Person('khan')
// console.log(tufael);

// let tufael = new (function(){
//     this.name = 'khan'
// })()

// let employe1 = {firstName: 'tufael', lastName: 'khan'}
// let employe2 = {firstName: 'mehedi', lastName: 'hasan'}
// function invite(greeting1, greeting2){
//     console.log(
//         greeting1 + '' + this.firstName+ '' + this.lastName+ ',' +greeting2
//     );
// }
// invite.call(employe1, 'hello','how are you?')
// invite.call(employe2, 'hw', 'how can i help you')

// let employe1 = {firstName: 'tufael', lastName: 'khan'}
// let employe2 = {firstName: 'mehedi', lastName: 'hasan'}
// function invite(greeting1, greeting2){
//     console.log(
//         greeting1 + '' + this.firstName+ '' + this.lastName+ ',' +greeting2
//     );
// }
// invite.apply(employe1, ['hello', 'and welcome'])
// invite.apply(employe2, ['hi', 'how can I help you'])

// let arrayInt = [3, 5, 7, 9, 11, 13]
// let arrayInt1 = [arrayInt.slice(0, 2)]
// let arrayInt2 = [arrayInt.slice(2, 3)]
// let arrayInt3 = [arrayInt.slice(4)]
// console.log(arrayInt1);
// console.log(arrayInt2);
// console.log(arrayInt3);

// let arrayInt = [3, 4, 5, 6, 7, 8]
// let arrayInt1 = [6, 7, 8, 9, 10]
// let arrayInt2 = arrayInt.splice(0,4)
// let arrayInt3 = arrayInt1.splice(3, 5, 'a', 'b')
// console.log(arrayInt2);
// console.log(arrayInt3);

// function userDetails(username){
//     if(username){
//         console.log(salary);
//         let age = 30;
//         console.log(age);
//         var salary = 10000;
//     }
//     console.log(salary);
     // console.log(age);
// }
// userDetails('john')

// Object.is('hello', 'tufael')
// Object.is(window, window)
// Object.is([], [])

let array = [34, 56, 36, 87, 399, 388, 65, 30, 60, 63, 82, 94]
// let max1 = -Infinity;
// for (i = 0; i< array.length - 1; i++){
//      if(max1 < array[i]){
//           max1 = array[i]
//      }
// }
// console.log(max1);

// let max2 = Math.max(...array)
// console.log(max2);

let max3 = Math.max.apply('', array)
console.log(max3);
