// -------Constructor functions

// they are just like regular functions

// they are called with the "new" keyword
// first letter is capital in case of constructor functions

// function User(name) {
//     // this = {} (implicit)
//     this.isAdmin = false;
//     this.firstName = name;
//     // {isAdmin: false, firstName: 'Rahul'}

//     // return this (implicit)
// }



// let person1 = new User("Rahul")

// console.log(person1)
// bunny -> mammal -> animal
// let animal = {
//     eats: true
// }

// let mammals = {
//     isMammal: true,
//     __proto__: animal
// }

// function SmallAnimalCreator(name) {
//     this.firstName = name
// }

// let mouse = new SmallAnimalCreator('Jerry');

// SmallAnimalCreator.prototype = animal; //Objects which will be created by SmallAnimalCreator will inherit from animal

// let rabbit = new SmallAnimalCreator('Donald')

// SmallAnimalCreator.prototype = mammals;

// let bunny = new SmallAnimalCreator('Bugs')

// console.log(rabbit) //
// console.log(bunny)
// console.log(mouse) // no prototype


// function Rabbit() {
//     // this = {}
//     // return this
// }
// Rabbit.prototype = {
//     eats: true
// }

// let rabbit = new Rabbit()

// console.log(rabbit.eats) //true




// function Rabbit() {
//     // this = {}
//     // return this
// }
// Rabbit.prototype = {
//     eats: true
// }

// let rabbit = new Rabbit()

// Rabbit.prototype = {}

// console.log(rabbit.eats) //true
// console.log(rabbit)



// function Rabbit() {
//     // this = {}
//     // return this
// }
// Rabbit.prototype = {
//     eats: true //reassigned to false
// }

// let rabbit = new Rabbit()

// Rabbit.prototype.eats = false //reassigning the PROPERTY INSIDE PROTOTYPE

// console.log(rabbit.eats) //false


// function Rabbit() {
//     // this = {}
//     // return this
// }
// Rabbit.prototype = {
//     eats: true
// }

// let rabbit = new Rabbit()

// delete rabbit.eats //no effect because rabbit object does not have any key by the name of eats

// console.log(rabbit.eats) //true (inherited property)


// function Rabbit() {
//     // this = {}
//     // return this
// }
// Rabbit.prototype = {
//     eats: true
// }

// let rabbit = new Rabbit()

// delete Rabbit.prototype.eats;

// console.log(rabbit.eats) //undefined





// ---First class functions
// var greetings = function () {
//     console.log('Hi')
// }

// greetings();

// greetings();
// function greetings() {
//     console.log('hi')
// }

// function tenSquared() {
//     return 10 * 10;
// }

// output = tenSquared()
// console.log(output)

// function nineSquared() {
//     return 9 * 9;
// }

// output = nineSquared()
// console.log(output)

// function numSquared(num) {
//     return num * num;
// }

// console.log(numSquared(10))


// function copyArrayMultiplyBy2(array) {
//     let output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] * 2)
//     }

//     return output
// }

// let myArray = [1, 2, 3];

// let result = copyArrayMultiplyBy2(myArray)

// console.log(result)

// function copyArrayMultiplyBy3(array) {
//     let output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] * 3)
//     }

//     return output
// }

// let result = copyArrayMultiplyBy3(myArray)
// console.log(result)

// function multiplyby2(num) {
//     return num * 2;
// }

// function multiplyby3(num) {
//     return num * 3;
// }
// // function add5(num) {

// // }

// function copyArrayAndManipulate(array, instructions) { //instructions - multiplyby2, multiplyby3 ...

//     let output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i])) //---> multiplyedby2(array[i])
//     }
//     return output
// }

// let myArray = [1, 2, 3];

// let result = copyArrayAndManipulate(myArray, multiplyby3)

// console.log(result)

