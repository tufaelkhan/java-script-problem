function checkAge(data){
    if(data === {age: 18}){
        console.log('you are an adult!');
    }else if(data == {age:18}){
        console.log('you are child');
    }
    else{
        console.log(`hm.. you don't have an age I guess`);
    }
}
// checkAge({age: 18})

// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(21)

function getAge(){
    'use strict';
    let age = 23;
    console.log(age);
}
// getAge()
// const sum = eval('10*10+5')

var num = 20;
var num = 50;
// console.log(num);

// const obj = {1: 'a', 2: 'b', 3: 'c'}
// const set = new Set([1, 3, 6, 12, 24])
// obj.hasOwnProperty('1')
// obj.hasOwnProperty(1)
// set.has('1')
// set.has(1)

const obj = {a: 'one', b: 'two', a: 'three'}
// console.log(obj);
for(let i = 0; i<=5; i++){
    if(i === 3) continue
    // console.log(i);
}

String.prototype.giveLydiaPizz = () => {
    return 'just give lydia pizza already'
}
const name = 'tufael'
// console.log(name.giveLydiaPizz());

const a = {};
const b = {key: 'b'}
const c = {key: 'c'}
a[b] = 123;
a[c] = 345;
// console.log(a[b]);

const foo = () => console.log('first');
const bar = () => setTimeout(() => console.log('second'))
const baz = () => console.log('third');
// bar()
// foo()
// baz()

const person = {nam: 'tufael'}
function sayHi(boyos){
    return `${this.nam} is ${age}`
}
// console.log(sayHi.call(person, 32));
// console.log(sayHi.bind(person, 32));

// console.log(typeof 1);
// const numbers = [1, 3, 5]
// numbers[10] = 40
// console.log(numbers);

(()=>{
    let x,y;
    try{
        throw new Error();
    }catch(x){
        (x = 1), (y= 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();