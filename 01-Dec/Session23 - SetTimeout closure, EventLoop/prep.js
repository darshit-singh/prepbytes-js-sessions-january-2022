// 4
// Write function sum that works like this: sum(a)(b) = a+b.

// function sum(a) {
//   return function(b) {
//     return a + b; // takes "a" from the outer lexical environment
//   };

// }
// sum(a)(b)





// -------------SetTimeout and CLOSURES
// function callback() {
//   console.log('hi after 3 seconds')
// }
// setTimeout(callback, 3000)


// setTimeout(function () {
//   console.log('Hi after 3 seconds')
// }, 3000)


// How setTimeout prints after
// setTimeout(function () {
//   console.log('Hi after 3 seconds')
// }, 3000)
// console.log('print random')

//explain event loop
// function printHello() {
//     console.log("hello inside printHello")
// }

// function abc() {
//     console.log("me second")
// }

// console.log("Me first")
// setTimeout(printHello, 2000)
// abc()
// console.log("Me third")








// SetTimeout stores the callback function somewhere and attaches a timer to it, when that timer expires JS executes that function

// function fun() {
//   var a = 10;
//   setTimeout(function () {
//     console.log(a)
//   }, 3000)
//   console.log('Hi inside fun')
// }

// fun()


//-------- CLOSURE AND SET TIMEOUT
// How do I print values in succession 1 to 5  with timeouts?

// function fun() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   }
//   console.log('Inside FUN')
// }

// fun()

// for (var i = 1; i <= 5; i++) {
//   console.log('hi')
// }
// console.log(i) //6


// How can we fix this.
// by using let.

// Whenever we run the loop, the let variable causes to make a new variable i, since let is block scoped
// And each time that setTimeout is run it has a new copy of i with it

// function fun() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   }
//   console.log('Inside FUN')
// }

// fun()


// How to us it without let

// function fun() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x)
//       }, x * 1000)
//     }
//     close(i)
//   }
// }
// fun()


// another approach
// function fun() {
//     for (var i = 1; i <= 5; i++) {
//         function inner() {
//             var k = i;
//             setTimeout(function () {
//                 console.log(k);
//             }, 2000)
//         }
//         inner();
//     }
//     console.log('Inside fn')
// };
// fun();


// Everytime you call close with i; it creates a new copy of i inside which is used by SetTimeout