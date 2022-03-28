
// ---------namaste JS closure ep 10
// function outer(){
//   var num = 5;
//   function inner() {
//     console.log(num)
//   }
//   inner()
// }

// outer() //5

// Closure - a function bundled together with its lexical environment; along with its lexical scope
// inner function has access to its parent's lexical scope

// function outer(){
//   var num = 5;
//   function inner() {
//     console.log(num)
//   }
//   return inner
// }

// var result = outer()
// console.log(result)
// result()

// now this function has been returned, earlier it was running inside outer itself.
// So how will this inner function behave now
// when functions are returned they still maintain their lexical scope, they remember where they were born
// when a function is returned, the WHOLE CLOSURE is returned with it; that is why it knows the value of num
// the closure contains the REFERENCE to those variables.

// function outer() {
//   var num = 5;
//   return function ()) {
//     console.log(num)
//   }
// }


// more nested function closure

// function extraOuter() {
//   var a = 6;
//   return function outer() {
//     var b = 1;
//     return function inner() {
//       console.log(a, b)
//     }
//   }
// }

// let outerResult = extraOuter()
// let innerResult = outerResult()
// innerResult()
// extraOuter()()()

// ---------------Questions
// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();



// 2
// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     alert(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // Pete



// 3
// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// alert( counter2() ); // 0
// alert( counter2() ); // 1


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


// function fun() {
//   var a = 10;
//   setTimeout(function () {
//     console.log(a)
//   }, 3000)
//   console.log('Hi inside fun')
// }

// fun()

// SetTimeout stores the callback function somewhere and attaches a timer to it, when that timer expires JS executes that function




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

// Everytime you call close with i; it creates a new copy of i inside which is used by SetTimeout






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