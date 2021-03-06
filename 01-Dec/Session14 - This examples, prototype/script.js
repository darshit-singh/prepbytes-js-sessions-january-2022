// ---------question

// let obj = {
//     message: 'Hello, World',
//     getMessage: function () {
//         let message = 'Hello'
//         return this.message // <=> return obj.message
//     }
// }



// var message = 'Hello Window' // global scope, window scope
// function sayHi() {
//     var message = 'Hello function message'
//     return this.message //global / window --> return window.message
// }

// console.log(obj.getMessage())
// console.log(sayHi())
// console.log(window.message) //hello window


// --------question
// var phrase = 'window'
// let obj = {
//     phrase: 'World',
//     greet: function () {
//         return `Hello, ${this.phrase}`
//     },
//     farewell: () => {
//         return `Goodbye, ${this.phrase}`
//     }
// }

// console.log(obj.greet())
// console.log(obj.farewell())

//------ Call, apply and bind

// let user = {
//     firstName: 'Rahul',
//     sayHi: function () {
//         // console.log(this)
//         console.log(this.firstName)
//     }
// }

// let admin = {
//     firstName: 'Aditi',
//     // sayHi: function () {
//     //     console.log(this.firstName)
//     // }
// }

// let user2 = {
//     firstName: 'Raghu',
// }

// user.sayHi.call(user2)
// user.sayHi.apply(user2)
// let returnF = user.sayHi.bind(user2)
// returnF()
// user.sayHi.bind(user2)()

// user.sayHi() // "this" value inside sayHi is user
// user.sayHi.call(admin) // re-assigns this to admin
// user.sayHi.apply(user2) // re-assigns this to user2

// console.log(user.sayHi)
// user.sayHi()
// user.sayHi.call(admin)
// user.sayHi.apply(admin)

// var returnedFunc = user.sayHi.bind(admin) //bind returns a function and assigns this to the object present inside argument

// returnedFunc()

// user.sayHi.bind(user2)()

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

// let user = {
//     firstName: 'Rahul',
//     sayHi: function () {
//         console.log(this.firstName)
//         this.firstName = 'Bhanu'
//     }
// }

// let admin = {
//     firstName: 'Aditi',
//     isAdmin: true,
//     __proto__: user
// }

// user.sayHi() //Rahul
// console.log('user.firstName', user.firstName) // Bhanu
// console.log('admin.firstName', admin.firstName) // Aditi
