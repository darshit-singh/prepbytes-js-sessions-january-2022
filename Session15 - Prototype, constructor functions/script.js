// -------PROTOTYPES

// let user = {
//     name1: 'Rahul'
// }
// console.log(user.hasOwnProperty('name1'))

// eats: true, moves: true
// let living_things = {
//     isGreen: false
// }

// let animal = {
//     eats: true,
//     moves: true
// }
// // DRY principle - Don't Repeat Yourself

// let rabbit = {
//     jumps: true,
// }

// let mouse = {
//     hasTail: true
// }

// rabbit.__proto__ = animal //rabbit inherits animal object

// mouse.__proto__ = animal //mouse inherits animal object

// console.log(mouse.eats)

// animal.__proto__ = living_things
// rabbit.__proto__ = animal

// rabbit.eats = 'hi'
// console.log(rabbit.hasOwnProperty('eats'))

// console.log(rabbit.eats) // hi
// console.log(animal.eats) // true
// console.log(rabbit)

// let animal = {
//     // eats: true,
//     // moves: true
//     jumps: null
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// console.log(rabbit.jumps) // true

// delete rabbit.jumps

// console.log(rabbit.jumps) //

// delete animal.jumps;

// console.log(rabbit.jumps) //



// pocket -> bed -> table -> head
// let head = {
//     glasses: 1
// }

// let table = {
//     pen: 3,
//     __proto__: head
// }

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// }

// let pockets = {
//     money: 2000,
//     __proto__: bed
// }

// // task1. assign prototypes like said

// // task2. answer the outputs.
// console.log(pockets.pen)
// console.log(bed.glasses)
// console.log(table.money)



// let user = {
//     firstName: 'Rahul',
//     sayHi: function () {
//         console.log(this.firstName)
//         this.firstName = 'Shreya'
//     }
// }

// let admin = {
//     firstName: 'Aditi',
//     isAdmin: true,
//     __proto__: user
// }

// // user.sayHi() //Rahul
// // console.log('user.firstName', user.firstName) //Shreya
// // console.log('admin.firstName', admin.firstName) //Aditi


// admin.sayHi() //Aditi
// console.log('user.firstName', user.firstName) //Rahul
// console.log('admin.firstName', admin.firstName) //Shreya


// admin.sayHi.call(user) //Rahul
// console.log('user.firstName', user.firstName) //Shreya
// console.log('admin.firstName', admin.firstName) //Aditi


// let animal = {
//     eats: true,
//     moves: true
// }

// let rabbit = {
//     jumps: true,
//     isHappy: true,
//     __proto__: animal
// }

// console.log(Object.keys(rabbit)) //you don't get inherited keys

// for (let key in rabbit) { //you get all the keys, INCLUDING inherited keys
//     console.log(key)
// }

// for (let key in rabbit) {
//     // console keys which are directly inside rabbit
//     if (!rabbit.hasOwnProperty(key)) {
//         console.log(key)
//     }
// }

// let animal = {
//     eats: true,
//     moves: true
// }

// let rabbit = Object.create(animal, {})

// console.log(rabbit)



// ----Constructor functions
// function User(name, last) {
//     //this = {} , implicit

//     this.firstName = name;
//     this.isAdmin = false;
//     this.lastName = last
//     // {firstName: raghu, isAdmin: false} implicit

//     // return this, implicit

// }

// let person1 = new User('raghu', 'ram')

// console.log(person1)










