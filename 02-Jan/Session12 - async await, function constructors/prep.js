// let promiseA = new Promise((resolve, reject) => {
//     resolve("A")
// })

// console.log('Me first')

// setTimeout(() => {
//     console.log('timeout, callback queue')
// }, 0)

// promiseA.then((data) => {
//     console.log(data)
// })

// console.log('Me last')

// microtask queue

// event loop prioritizes the microtask queue




// -----------------------------------
// let promiseA = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("A")
//     }, 1000)
// })

// let promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("B")
//     }, 2000)
// })


// console.log('Me first')
// promiseA.then((data) => { console.log(data) })
// console.log('Before B')
// promiseB.then((data) => { console.log(data) })
// console.log('Me last')

// ------------actual way
// console.log('Me first')
// promiseA.then((data) => { //things inside then run only AFTER The promise is fulfilled
//     console.log(data)
//     console.log('Before B')
// })
// promiseB.then((data) => {
//     console.log(data)
//     console.log('Me last')
// })


// function printLetter(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log(letter)
//             resolve(letter)
//         }, 1000)
//     })
// }

// function printAlphabets() {
//     printLetter('A')
//         .then((data) => {
//             console.log(data)
//             console.log('Before B gets resolved')
//             return printLetter('B')
//         })
//         .then((data) => {
//             console.log(data)
//             console.log('Before C gets resolved')
//             return printLetter('C')
//         })
//         .then((data) => {
//             console.log(data)
//         })
// }

// printAlphabets()



// async await ------ "synctactic sugar" ------- meaning: it makes your code much more readable

// async function printAlphabets() {
//     await printLetter("A")
//     console.log("Me before B")
//     await printLetter("B")
//     console.log("Me before C")
//     await printLetter("C")
// }

// printAlphabets()


// async function printAlphabets() {
//     let ans1 = await printLetter("A")
//     console.log(ans1)
//     console.log("Me before B")
//     let ans2 = await printLetter("B")
//     console.log(ans2)
//     console.log("Me before C")
//     let ans3 = await printLetter("C")
//     console.log(ans3)
// }

// printAlphabets()





//-------------- Question - you print these in order -> first, second, third

// console.log('first')

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("second")
//     }, 1000)
// })

// promise.then((result) => {
//     console.log(result)
//     console.log('third')
// })


// async function callMe() {
//     console.log("first")
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('second')
//             resolve()
//             // resolve("second") -----> need to assign promise to a variable to access resolved value
//         }, 1000)
//     })
//     console.log("third")
// }
// callMe()


// -----------------Prototypes
// --------PROTOTYPES
// let user = {}

// console.log(user)

// let animal = {
//     eats: true,
//     moves: true,
// }

// let rabbit = {
//     jumps: true
// }

// let mouse = {
//     hasTail: true
// }
// rabbit.__proto__ = animal //rabbit inherits animal object

// rabbit.eats = 'hi'

// mouse.__proto__ = animal // mouse inherits animal object

// console.log(rabbit)
// console.log(rabbit.eats)

// let animal = {
//     eats: true,
//     moves: true,
//     walk: function () {
//         console.log('I walk')
//     }
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// let fatRabbit = {
//     weight: 'fat',
//     __proto__: rabbit
// }

// // animal is the prototype of rabbit OR rabbit inherits from animal
// // fatRabbit.walk()

// console.log(fatRabbit.sleeps)

// let animal = {
//     eats: true,
//     moves: true,
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// console.log(rabbit.hasOwnProperty('eats'))
// console.log(rabbit.eats)


// --------LOOPING
// The for..in loop iterates over inherited properties too.

// let animal = {
//     eats: true,
//     moves: true
// }

// let rabbit = {
//     jumps: true,
//     isHappy: true,
//     __proto__: animal
// }

// // Object.keys only returns own keys
// console.log(Object.keys(rabbit)); // jumps

// // for..in loops over both own and inherited keys
// for (let prop in rabbit) console.log(prop);

// If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

// for (let key in rabbit) {
//     // console keys which are directly inside rabbit
//     if (!rabbit.hasOwnProperty(key)) {
//         console.log(key, ' own')
//     } else {
//         console.log(key, ' Inherited')
//     }
// }


// ------question1
// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };

//   console.log( rabbit.jumps ); // ? (1) true

//   delete rabbit.jumps;

//   console.log( rabbit.jumps ); // ? (2) null

//   delete animal.jumps;

//   console.log( rabbit.jumps ); // undefined


// --------Constructor functions

// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.


// function User(name) {
//this = {} (implicit)

//     this.name = name;
//     this.isAdmin = false;

// return this (implicit)
//   }

//   let user = new User("Jack");

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.


// let animal = {
//     eats: true
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit); // true

// Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal".



