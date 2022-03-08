// var x = 10

// function add(a, b) {
//     return a + b + x
// }

// // console.log(add(3, 4));//17
// // x++;
// // console.log(add(3, 4)); //18

// // add function is NOT pure

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(3, 4)) //7
// x++;
// console.log(sum(3, 4)) //7

// // sum is pure because you get same output for the same set of arguments.
// var number = 10;
// function printNumber(a, b) {
//     console.log(a, b);
//     console.log(this.number)
// }

// let obj1 = {
//     number: 3,
//     objNumber: function () {
//         console.log(this.number)
//     }
// }

// let obj2 = {
//     number: 7
// }

// // printNumber() //10
// // obj1.objNumber() // 3

// // obj1.objNumber.call(obj2) // 7
// // console.log('CALL-------')
// // printNumber.call(obj2, 100, 200)

// // console.log('APPLY-------')
// // printNumber.apply(obj2, [300, 400]) // 7

// // printNumber.bind(obj2)('bind', 'function')

// var newFunc = printNumber.bind(obj2)
// newFunc('argument1', 'argument2')

// function sayHi() {
//     console.log('Hi', this.firstName)
// }

// let p1 = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// let p2 = {
//     firstName: 'Jane',
//     lastName: 'Smith'
// }

// sayHi()
// sayHi.bind(p1)()
// sayHi.call(p2)
// sayHi.apply(p1)

