
// function sum (num) {
//     if (num > 10) {
//         console.log(num + 3)
//     }
//     else if (num < 10) {
//         console.log(num *2)
//     }
//     else {
//         console.log(22)
//     }
// }
// sum(15);
// sum(7);
// sum(10);


// let a = 7;

// let b = Math.floor(a / 3) 
// console.log(b)


// let a = 7;
// let b = 8;
// let c = Math.floor(a % 3);
// let d = Math.floor(b % 3);
// console.log(d)
// console.log(c)

// const evenOrOdd = (num) => {
//     if ( num % 2 === 0) {
//         return 'Even'
//     }
//     else{
//         return 'Odd'
//     }
// }
// console.log(evenOrOdd(4))
// console.log(evenOrOdd(7))
// console.log(evenOrOdd(18))

// function max(a, b) {
//     if (a < b) {
//         return `katta son ${b}`
//     }
//     else if (a === b) {
//         return 'bu sonlar teng'
//     }
//     else {
//         return 'Xato'
//     }
// }
// console.log(max(4, 7))
// console.log(max(5,5))


// function maxNum(a,b,c) {
//     if (a > b && a > c) {
//         return `katta son ${a}`
//     }
//     else if (b > a && b > c) {
//         return `katta son ${b}`
//     }
//     else if (c > a && c > b) {
//         return `katta son ${c}`
//     }
//     else {
//         return 'Xato'
//     }
// }

// console.log(maxNum(4, 7, 5))
// console.log(maxNum(9, 3, 10))
// console.log(maxNum(5, 1, 4))

// function maxNum(a) {
//     if (a > 0) {
//         return 'Musbat son'
//     }
//     else if (a < 0) {
//         return 'Manfiy son'
//     }
//     else if (a === 0) {
//         return '0'
//     }
//     else {
//         return 'Xato'
//     }
// }
// console.log(maxNum(4))
// console.log(maxNum(-5))
// console.log(maxNum(0))

// function find(a) {
//     if ( a % 5 === 0) {
//         console.log('True')
//     }
//     else {
//         console.log('Xato')
//     }
// }
// find(10)
// find(7)

// function sum(a) {
//     if ( a % 3 === 0 && a % 4 === 0){
//         console.log('True')
//     }
//     else {
//         console.log('False')
//     }
// }
// sum(14)
// sum(24)

// function kabisaYear (year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         return 'Kabisa yil'
//     }
//     else {
//         return 'Kabisa yil emas'
//     }
// }
// console.log(kabisaYear(2020))
// console.log(kabisaYear(2021))

// function char(c) {
//     if ( c >= '0' && c <= '9') {
//         console.log('Son')
//     }
//     else {
//         console.log('Alfa')
//     }
// }
// char('a')
// char('5')


// function char(c) {
//     if ( c >= 'a' && c <='z'){
//         console.log('lowerCase')
//     }
//     else if(c >= 'A' && c <= 'Z'){
//         console.log('upperCase')
//     }
//     else{
//         console.log('None')
//     }
// }
// char('a')
// char('A')

// function weekDays(day) {
//     if (day === 1) {
//         console.log('Dushanba')
//     }
//     else if (day === 2) {
//         console.log('Seshanba')
//     }
//     else if (day === 3) {
//         console.log('Chorshanba')
//     }
//     else if (day === 4) {
//         console.log('Payshanba')
//     }
//     else if (day === 5) {
//         console.log('Juma')
//     }
//     else if (day === 6) {
//         console.log('Shanba')
//     }
//     else if (day === 7) {
//         console.log('Yakshanba')
//     }
//     else {
//         console.log('Xato')
//     }
// }
// weekDays(6)

// function triggle(a,b,c) {
//     if (a + b > c && a + c > b && b + c > a){
//         return 'True'
//     }
//     else{
//         return 'False'
//     }
// }
// console.log(triggle(20,25,30))
// console.log(triggle(120, 10, 20))

// const find = (a,b) => {
//     if (a < b){
//         console.log('Kichik son')
//     }
//     else if (a === b){
//         console.log('Teng sonlar')
//     }
//     else{
//         console.log('Xato')
//     }
// }
// find(1,8)
// find(4, 4)

// let a = 5;
// let b = 10;
// let c = 15;

// let sum = a + b + c;
// let avarage = sum / 3
// console.log(avarage)

// function foo(a,b,c) {
//     if (c > b && b > a) {
//         console.log(1)
//     }
//     else if (a > b && b > c){
//         console.log(2)
//     }
//     else if (b > a && b > c){
//         console.log(b)
//     }
//     else if (a === b && b === c){
//         console.log(5)
//     }
//     else {
//         console.log(0)
//     }
// }

// foo(5,10,15)
// foo(3,10,8)
// foo(3,5,3)


// function foo(a,b,c) {
//     if ( a === b ){
//         console.log(c)
//     }
//     else if ( a === c){
//         console.log(b)
//     }
//     else if (b === c) {
//         console.log(a)
//     }
//     else {
//         console.log(0)
//     }
// }
// foo(5,10,5)
// foo(3,10,8)

// function distance(a,b) {
//     return b - a;
// }
// console.log(distance(-2,6))


// function distance(a) {
//     if ( a > 0){
//         console.log(a)
//     }
//     else{
//         console.log(-1 * a)
//     }
// }
// distance(-15)

// const foo = (a) => {
//     if(a >= 100) {
//         console.log(3)
//     }
//     else if(a >= 10){
//         console.log(2)
//     }
//     else{
//         console.log(1)
//     }
// }
// foo(2)

// function foo(a,b,c,d){
//     if(a > 0 && b > 0 && c > 0 && d > 0){
//         console.log("True")
//     }
//     else{
//         console.log('False')
//     }
// }
// foo(5,6,4,7)
// foo(-1,2,3,8)

// function foo(a,b,c){
//     if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0){
//         console.log(1)
//     }
//     else if(a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
//         console.log(2)
//     }
//     else if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
//         console.log(3)
//     }
//     else{
//         console.log(0)
//     }
// }
// foo(5,7,9)
// foo(16,20,30)
// foo(18,7,16)

// function foo(a, b, c) {
//     if ((a % 2 == 0 && b % 2 == 0) ||
//         (a % 2 == 0 && c % 2 == 0) ||
//         (b % 2 == 0 && c % 2 == 0)) {
//         console.log(1)
//     }
//     else if ((a % 2 == 1 && b % 2 == 1) ||
//         (a % 2 == 1 && c % 2 == 1) ||
//         (b % 2 == 1 && c % 2 == 1)) {
//         console.log(2)
//     }
//     else {
//         console.log(0)
//     }
// }
// foo(8, 2, 9)
// foo(16, 21, 17)

// function foo(a,b,c){
//     if(a > 0 && b > 0 && c > 0){
//         console.log(a *100 + b * 10 + c)
//     }
//     else{
//         console.log(0)
//     }
// }
// foo(3,6,2)
// foo(8,0,3)


// console.log(this)


// console.log("1"); // Sinxron

// setTimeout(() => {
//   console.log("2"); // Asinxron
// }, 1000);

// console.log("3"); // Sinxron


const foo = function (a) {
    for (let i = 0; i > a.length; i++) {
        console.log(a[i]);
    }
};

// Misol uchun:
const massiv = [1, 2, 3, 4, 5];
foo(10); // Natija: 1, 2, 3, 4, 5
