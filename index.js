// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);
// // circle.draw();
// //constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// const another = new Circle(1)
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// Circle.call({}, 1)
// Circle.apply({}, [1, 2, 3])
// const circle = new Circle(10)
// circle.location = { x: 1}
// circle['location'] = {x: 1}
// for (let key in circle){
//     if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);
// if('radius' in circle)
// console.log('circle has a radius');

// let x = { value: 10};
// let y = x;
// x = 40
// console.log(y);

// let obj = {value: 20}
// function increase(number){
//    obj.value++;
// }
// increase(obj)
// console.log(obj);

// function Circle(radius){
//     this.radius = radius;
//     let defaultLocation = {x: 0, y: 0}
//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     }
//     this.draw = function(){
//         // defaultLocation
//         // this.radius
//         console.log('draw');
//     }
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation
//         }
//         set: function(value){
//             if(!value.x || !value.y)
//             throw new Error('Invalid location.')

//             defaultLocation = value
//         }
//     })
// }
// const circle = new Circle(10)
// circle.coputeOptimumLocation(0.1);
// circle.defaultLocation = 0;
// circle.defaultLocation = 1;
// circle.draw()

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
        throw new Error('stopwatch has already started');
        running = true;
        startTime = new Date()
    }

    this.stop = function(){
        if(!running)
        throw new Error('stopwatch is not started')
        running = false;
        startTime = false;
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    }

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {return duration}
    })
}