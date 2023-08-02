function tufael(){
    console.log(name)
    console.log(age)
    var name = 'khan'
    let age = 23
}
// tufael()

// for(var i=0; i<3; i++){
//     setTimeout(() => console.log(i), 1)
// }

// for(let i=0; i<3; i++){
//     setTimeout(() => console.log(i), 1)
// }

const shape = {
    radius: 10,
    diameter(){
        return this.radius*2
    },
    perimeter:() =>2*Math.PI*this.radius,
}
// console.log(shape.diameter());
// console.log(shape.perimeter());

// console.log(!false);
// console.log(!'khan');

const bird = {
    size: 'small',
}
let mouse = {
    name: 'Mickey',
    small: true
}
// console.log(bird);
// console.log(mouse);

let c = {greeting: 'khan'}
let d;
d = c;
c.greeting = 20
// console.log(d.greeting);

let a = 3;
let b = new Number(3)
// let c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

class Chameleon {
    static colorChange(newColor){
        this.newColor = newColor;
        return this.newColor;
    }
    constructor({newColor = 'green'} = {}){
        this.newColor = newColor;
    }
}
const fraddie = new Chameleon({newColor: 'purple'})
// console.log(fraddie.colorChange('orange'));

let greetingIo;
greetingIo = {};
// console.log(greetingIo);

function bark(){
    // console.log('khan');
}
bark.animal = 'dog'
// console.log(bark());

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const member = new Person('tufael', 'khan')
Person.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
// console.log(member.getFullName());

function Man(first, second){
    this.first = first;
    this.second = second;
}
const mehedi = new Man('mehedi', 'hassan')
const junayed = Man('junayed', 'khan')
console.log(mehedi);
function tufael(){
    console.log(name)
    console.log(age)
    var name = 'khan'
    let age = 23
}
// tufael()

// for(var i=0; i<3; i++){
//     setTimeout(() => console.log(i), 1)
// }

// for(let i=0; i<3; i++){
//     setTimeout(() => console.log(i), 1)
// }

const shape = {
    radius: 10,
    diameter(){
        return this.radius*2
    },
    perimeter:() =>2*Math.PI*this.radius,
}
// console.log(shape.diameter());
// console.log(shape.perimeter());

// console.log(!false);
// console.log(!'khan');

const bird = {
    size: 'small',
}
let mouse = {
    name: 'Mickey',
    small: true
}
// console.log(bird);
// console.log(mouse);

let c = {greeting: 'khan'}
let d;
d = c;
c.greeting = 20
// console.log(d.greeting);

let a = 3;
let b = new Number(3)
// let c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

class Chameleon {
    static colorChange(newColor){
        this.newColor = newColor;
        return this.newColor;
    }
    constructor({newColor = 'green'} = {}){
        this.newColor = newColor;
    }
}
const fraddie = new Chameleon({newColor: 'purple'})
// console.log(fraddie.colorChange('orange'));

let greetingIo;
greetingIo = {};
// console.log(greetingIo);

function bark(){
    // console.log('khan');
}
bark.animal = 'dog'
// console.log(bark());

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const member = new Person('tufael', 'khan')
Person.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
// console.log(member.getFullName());

