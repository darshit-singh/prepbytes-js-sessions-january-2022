// ----------THIS KEYWORD
// Talk about why objects are needed, user and function together

// normal function working in object
// let user = {
//     name1: 'Rahul',
//     sayHi: function () {
//         console.log('Hi');
//     }
// }
// user.sayHi()


// let user = {
//     name1: 'Rahul',
//     sayHi: function () {
//         console.log('Hi', user.name1);
//     }
// }
// user.sayHi()

// let user = {
//     name1: 'Rahul',
//     score: 0,
//     incrementScore: function() {
//         user.score++;
//     }
// }


// ---------with a different object
// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert(user.name); // leads to an error
//     }

// };
// let admin = user;
// user = null; //removed object reference from the user.
// // console.log(admin, user)
// admin.sayHi()


// let user = {
//     name1: 'Rahul',
//     sayHi: function () {
//         console.log('Hi', this.name1);
//     }
// }

// user.sayHi()

//----- FUNCTION DECLARATION OUTSIDE
// function sayHi() {
//     console.log(this.name)
// }

// let user = {
//     name: 'Rahul'
// }

// let admin = {
//     name: 'Aditi'
// }

// user.func = sayHi;
// admin.functionVar = sayHi;

// user.func()
// admin.functionVar()

// ------------ARROW FUNCTIONS HAVE NO THIS
// var name1 = 'Akriti' // won't work for let or const as they are not saved in global
// let user = {
//     name1: 'Rahul',
//     sayHi: () => {
//         console.log('Hi', this.name1);
//     }
// }

// user.sayHi()
// console.log(window.name1)
// show that this points to the global object first
// In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:

// The value of this is defined at run-time.

// ------question on this
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () { // shows the current step
//         console.log(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.showStep(); // -1
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.showStep(); // 2



// ----------question 2
// what is consoled ?
// const object = {
//     message: 'Hello, World!',
//     getMessage() {
//         const message = 'Hello, Earth!';
//         return this.message;
//     }
// };
// console.log(object.getMessage()); //Hello World

// --------question3
// const object = {
//     who: 'World',
//     greet() {
//         return `Hello, ${this.who}!`;
//     },
//     farewell: () => {
//         return `Goodbye, ${this.who}!`;
//     }
// };
// console.log(object.greet());    // hello world
// console.log(object.farewell()); //goodbye undefined



// call, apply, bind
// let user = {
//     name: 'darshit',
//     sayHi: function () {
//         console.log(this)
//         console.log(this.name)
//     }
// }
// let admin = {
//     name: 'rahul'
// }

// console.log(user.sayHi)
// user.sayHi.call(user)
// user.sayHi.apply(admin)
// user.sayHi.bind(admin)()

// let hello = user.sayHi.bind(admin);

// hello()

// --------question4
// const object = {
//     message: 'Hello, World!'
//   };
//   function logMessage() {
//     console.log(this.message); // logs 'Hello, World!'
//   }
//   // Using func.call() method
//   logMessage.call(object);
//   // Using func.apply() method
//   logMessage.apply(object);
//   // Creating a bound function
//   const boundLogMessage = logMessage.bind(object);
//   boundLogMessage();


// ------First class functions
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// const greetings = function() {
//     console.log("Hello there!");
//  }
//  greetings();

// We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

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
