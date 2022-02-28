// Write a function "sum" which works like this : sum(a)(b) , so that this returns a+b


// var ans = sum(10)(20)

// console.log(ans) //30


// currying

// function sum(a) {
//     return function (b) {
//         return a + b
//     }
// }

// console.log(sum(10)(15))


// --------setTimeout

// function cb() {
//     console.log('After timeout')
// }

// function printSomething() {
//     console.log('print something')
// }

// console.log("Me first")

// setTimeout(cb, 2000)
// setTimeout(cb, 0)

// printSomething()

// console.log("Me second")


// ------------closure and setTimeout

// function fun() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
//     //i, 6
//     console.log('Inside fun')
// }

// fun();
// var i = 1
// for (i = 1; i <= 5; i++) {
//     console.log(i)
// }
// console.log(i, 'loop finished')



// function fun() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
//     //i, 6
//     console.log('Inside fun')
// }

// fun();


// without let 1,2,3,4,5 ---------make i function scope

// function fun() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x)
//             }, x * 1000)
//         }
//         close(i)
//     }
//     console.log('Inside fun')
// }

// fun();


