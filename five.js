// var today = new Date()
// var day = today.getDay()
// var daylist = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sunday']
// console.log('Today is:' + daylist[day] + '.');
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// var prepand = (hour >= 12)? 'PM': 'AM';
// hour = (hour >= 12)? hour - 12: hour;
// if(hour === 0 && prepand === 'PM'){
//     if(minute === 0 && second === 0){
//         hour = 12;
//         prepand = 'moon'
//     }
//     else{
//         hour = 12;
//         prepand = 'PM';
//     }
// }
// if(hour === 0 && prepand === 'AM'){
//     if(minute === 0 && second === 0){
//         hour = 12;
//         prepand = 'midnight';
//     }
//     else{
//         hour = 12;
//         prepand = 'AM';
//     }
// }
// console.log('Current Time: ' +hour + prepand + ':' + minute + ':' + second);

// ES6 solution
// const today = new Date()
// const day = today.getDay()
// const daylist = ['sunday', 'monday', 'tuesday', 'wednesday', 'thusday', 'friday', 'satarday'];
// console.log(`Today is: ${daylist[day]}.`);
// let hour = today.getHours();
// let minute = today.getMinutes();
// const second = today.getSeconds();
// let prepand = (hour >=12)? 'PM': 'AM';
// hour = (hour >= 12)? hour - 12: hour;
// if(hour === 0 && prepand === 'PM'){
//     if(minute === 0 && second === 0){
//         hour = 12;
//         prepand = 'Moon'
//     }
//     else{
//         hour = 12;
//         prepand = 'PM';
//     }
// }
// if(hour === 0 && prepand == 'AM'){
//     if(minute === 0 && second === 0){
//         hour = 12;
//         prepand = 'midnight';
//     }else{
//         hour = 12;
//         prepand = 'AM';
//     }
// }
// console.log(`current Time: ${hour}${prepand} : ${minute}: ${second}`);

//date month year
// var today = new Date();
// var dd = today.getDate()

// var mm = today.getMonth()+1;
// var yyy = today.getFullYear()
// if(dd<10){
//     dd= '0'+dd;
// }
// if(mm<10){
//     mm = '0'+mm;
// }
// today = mm+ '=' +dd+ '='+yyy;
// console.log(today)
// today = mm+ '/' +dd+ '/'+yyy;
// console.log(today);
// today = dd+ '-' +mm+ '-' +yyy;
// console.log(today);
// today = dd+ '/' +mm+ '/' +yyy;
// console.log(today);

// ES6 Solution
// let today = new Date()
// let dd = today.getDate()

// let mm = today.getMonth()
// const yyyy = today.getFullYear()
// if(dd<10){
//     dd = `0${dd}`
// }
// if(mm<10){
//     mm = `0${mm}`
// }
// today = `${mm} / ${dd} / ${yyyy}`
// console.log(today);

//triangle solution
// var slide1 = 5;
// var slide2 = 4
// var slide3 = 8
// var s = (slide1 + slide2 + slide3)/2;
// var area = Math.sqrt(s*((s-slide1)*(s-slide2)*(s-slide3)))
// console.log(area);


// let today = new Date()
// var cmas = new Date(today.getFullYear(), 11, 25)
// if(today.getMonth()==11 && today.getDate()>25){
//     cmas.setFullYear(cmas.getFullYear()+1);
// }
// var one_day = 1000*60*60*24
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+ 'days left until christmas!');

// ES6 solution
// let today = new Date()
// const cmas = new Date(today.getFullYear(), 12, 16)
// if(today.getMonth() == 12 && today.getDate()>16){
//     cmas.setFullYear(cmas.getFullYear()+1);
// }
// const one_day = 1000*60*60*24
// console.log(`${Math.ceil((cmas.getTime() - today.getTime())/(one_day))} days left until indepence day!`);

// function multiplyBy(){
//     num1 = document.getElementById('first').value;
//     num2 = document.getElementById('second').value;
//     document.getElementById('result').innerHTML = num1 * num2
// }

// function divideBy(){
//     num1 = document.getElementById('first').value;
//     num2 = document.getElementById('second').value;
//     document.getElementById('result').innerHTML = num1 / num2
// }

// function celciousTofarhenheigh(celsius){
//     let cTemp = celsius
//     let ctoFahr = cTemp*9/5+32;
//     let message = cTemp+ 'xBoc is' +ctoFahr+ 'xBof';
//     console.log(message);
// }

// function fToC(fahrenheit){
//     let fTemp = fahrenheit;
//     let fToCel = (fTemp - 32)*5/9;
//     let message = fTemp+ 'Bof is' + fToCel+ 'BOC'
//     console.log(message);
// }
// celciousTofarhenheigh()
// fToC()

// const var_name = 'abcd';
// const n = 120;
// this[var_name] = n;
// console.log(this[var_name]);

// fileName = 'system.py'
// console.log(fileName.split('.').pop());
// filename = 'system.js'
// console.log(filename.split('.'));

// function difference(n){
//     if(n <= 13)
//     return 13-n;
//     else
//     return (n-13)*2
// }
// console.log(difference(100));

// function sumTwo(x, y){
//     if(x==y)
//     return 5* (x+y)
//     else if(x <= 14)
//     return x-y
//     else
//     return x+y
// }
// console.log(sumTwo(10, 20));

// function diff_num(n){
//     if(n <= 19)
//     return 19-n
//     else
//     return 3*(n-19)
// }
// console.log(diff_num(100));

// function testdata(x,y){
//     return ((x == 50 || y == 50) || (x+y == 50))
// }
// console.log(testdata(50, 20));

// function testHundred(x){
//     return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <=20))
// }
// console.log(testHundred(80));
// console.log(testHundred(90));

// function posative_negative(x, y){
//     if((x<0 && y>0) || x>0 && y<0)
//     return true
//     else
//     return false
// }
// console.log(posative_negative(5, -5));

// function string_check(str1){
//     if(str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py')
//     return str1
//     else
//     return `Py${str1}`
// }
// console.log(string_check('Python'));
// console.log(string_check('thon'));


// function remove(str, char){
//     part1 = str.substring(0, char)
//     part2 = str.substring(char+ 1, str.length)
//     return (part1 + part2)
// }
// console.log(remove('Python', 1));

// function first_last(str1){
//     if(str1.length <= 1){
//         return str1
//     }
//     mid_char = str1.substring(1, str1.length-1)
//     return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0)
// }
// console.log(first_last('khan'));

// function testNumber(x){
//     if(x % 3 === 0 || x % 7 === 0)
//     return true
//     else
//     return false
// }
// console.log(testNumber(93));


// function frontBack(str){
//     if(str.length >= 3){
//         str_len = 3;
//         back = str.substring(str.length - 3)
//         return back + str + back
//     }
//     else
//     return false
// }
// console.log(frontBack('tufael'));


// function startSpac(str){
//     if(str.length < 4)
//     return false
//     front = str.substring(0, 4)
//     if(front == 'Java')
//     return true
//     else
//     return false
// }
// console.log(startSpac('Java'));
// console.log(startSpac('tufael'));


// function checkNumber(x, y, z){
//     if((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99))
//     return true
//     else
//     return false
// }
// console.log(checkNumber(170, 810, 90));


// function checkScript(str){
//     if(str.length < 6){
//     return str
//     }
//     let resultStr = str;
//     if(str.substring(10, 4) == 'Script'){
//         resultStr = str.substring(0, 4) + str.substring(10, str.length)
//     }
//     return resultStr
// }
// console.log(checkScript('javaScript'));
// console.log(checkScript('coffeeScript'));


// function maxThree(x, y, z){
//     let maxValue = 0;
//     if(x > y){
//         maxValue = x;
//     }else{
//         maxValue = y;
//     }
//     if(z > maxValue){
//         maxValue = z;
//     }
//     return maxValue;
// }
// console.log('max value is', maxThree(13, 7, 12));


// function nearHundared(x, y){
//     if( x != y){
//         x1 = Math.abs(x - 100)
//         y1 = Math.abs(y - 100)

//         if(x1 < y1){
//             return x;
//         }
//         if( y1 < x1){
//             return y;
//         }
//         return 0;
//     }else
//     return false;
// }
// console.log(nearHundared(20, 30));



