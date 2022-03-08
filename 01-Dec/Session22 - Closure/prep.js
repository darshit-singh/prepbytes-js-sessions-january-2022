// ---------Higher order example
// const sidesArray = [1, 2, 3, 4, 5] //sides of different squares

// const calcArea = function (arr) {
//     const output = []

//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] * arr[i])
//     }
//     return output
// }
// let result = calcArea(sidesArray)
// console.log(result)

// const sidesArray = [1, 2, 3, 4, 5] //sides of different squares

// const calcPerimeter = function (arr) {
//     const output = []

//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] * 4)
//     }
//     return output
// }
// let result = calcPerimeter(sidesArray)
// console.log(result)

// --------OPTIMIZED using functional programming
// const calcArea = side => side * side
// const calcPerimeter = side => 4 * side

// const operationOnSquare = (arr, instructions) => {
//     let output = []
//     for (let i = 0; i < arr.length; i++) {
//         output.push(instructions(arr[i]))
//     }
//     return output
// }
// console.log(operationOnSquare(sidesArray, calcArea))
// console.log(operationOnSquare(sidesArray, calcPerimeter))




//---------- CALLBACK
//--------------- function as argument
// const sayHello = function () {
//     return "Hello, ";
// }
// const sayHello = () => "hello"
// function greeting(funcVariable, name) {
//     console.log(funcVariable)
//     console.log(funcVariable(), name)
// }
// greeting(sayHello, 'Rahul')
// The function that we pass as an argument to another function, is called a Callback function. sayHello is a Callback function.

// Higher-order functions are functions that take other functions as arguments or return functions as their results.

// --------returning a function
// function sayHello() {
//     return function () {
//         console.log("Hello!");
//     }
// }

// -------CALLING IT USING VARIABLE
// const myFunc = sayHello();
// myFunc();

// ----------CALLING IT USING ()()
// function sayHello() {
//     return function () {
//         console.log("Hello!");
//     }
// }
// sayHello()();


// if (true) {
//   let phrase = "Hello!";

//   console.log(phrase); // Hello!
// }

// console.log(phrase);
// for (let i = 0; i < 3; i++) {
//   console.log('hi')
// }
// console.log(i)

// Visually, let i is outside of {...}. But the for construct is special here: the variable, declared inside it, is considered a part of the block.

// ---------NESTED FUNCTIONS

// function sayHiBye(firstName, lastName) {

//   // helper nested function to use below
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log( "Hello, " + getFullName() );
//   console.log( "Bye, " + getFullName() );

// }

// It can access the outer variables and so can return the full name

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2


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