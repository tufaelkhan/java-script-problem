// [[0,1], [2,3]].reduce((acc, cur) =>{
//     return acc.concat(cur)
// },
// [1, 2])
// console.log(!!1);

// setInterval(() => console.log('object'))

// console.log([...'tufael khan']);

// function generator(i){
//     yield i;
//     yield i*2;
// }
// const gen = generator(10)
// console.log(gen.next().value);

// const firstPromise = new Promise((res, rej) =>{
//     setTimeout(res, 500, 'one')
// })
// const secondPromise = new Promixe((res, rej) =>{
//     setTimeout(res, 100, 'two')
// })
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res))

// let person = {name: 'tufael'}
// const members = [person]
// person = null
// console.log(members);

const person = {
    name: 'khan',
    age: 23,
}
// for(const item in person){
//     console.log(item);
// }

// console.log(3 + 5 + 30 + '10'+ 20);

// const num = parseInt('7*6', 10)
// console.log(num);
// const khan = [85,8,64,61,68,624,75]
// khan.map(num => {
//     if(typeof num === 'number') return;
//     return num *3
// })

function getInfo(member, year){
    member.name = 'tufael'
    year = '1998'
}
const per = {name: 'khan'}
const birthYear = '1997'
getInfo(per, birthYear)
console.log(per, birthYear);

