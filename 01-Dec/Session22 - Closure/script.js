// const sidesArray = [1, 2, 3, 4, 5] //sides of different squares

// const calcArea = function (arr) {
//     const output = [] //should contain area of the respective squares
//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] * arr[i])
//     }
//     return output
// }

// console.log(calcArea(sidesArray))

// const calcPerimeter = function (arr) {
//     const output = [] //should contain area of the respective squares
//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] * 4)
//     }
//     return output
// }

// console.log(calcPerimeter(sidesArray))





// const sidesArray = [1, 2, 3, 4, 5] //sides of different squares

// logic for perimeter
// const perimeter = num => num * 4;

// logic for area
// const area = num => num * num;

// function higherOrder(arr, logic) {
//     const output = []
//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]))
//     }
//     return output
// }

// console.log(higherOrder(sidesArray, area))
// console.log(higherOrder(sidesArray, perimeter))


// function sayHello() {
//     return function () {
//         console.log('Hello')
//     }
// }

// let returnValue = sayHello()
// // console.log(returnValue)
// returnValue()

// sayHello()()

// console.log(sayHello())


// ---------------Closure; very important

// function outer() {
//     var num = 5;
//     function inner() {
//         console.log(num)
//     }
//     inner()
// }

// outer()

// function outer() {
//     var num = 5;
//     function inner() {
//         // debugger
//         console.log(num)
//     }
//     return inner
// }

// // console.log(num)
// // let result = outer()
// // console.log(result)
// // console.log(num)
// outer()()

// directly returning function
// function outer() {
//     var num = 5;
//     return function () {
//         console.log(num)
//     }
// }

// outer()()



// function extraOuter() {
//     var a = 6;
//     return function outer() {
//         var b = 1
//         return function inner() {
//             debugger
//             console.log(a, b)
//         }
//     }
// }
// let outerResult = extraOuter()
// // console.log(outerResult)
// let innerResult = outerResult()
// // console.log(innerResult)
// innerResult()

// extraOuter()()()



// -----------questions
// 1.
// let firstName = 'Rahul'

// function sayHi() {
//     console.log('hi', firstName)
// }

// firstName = 'Aditi'

// sayHi();

// 2.
// function outer() {
//     let name = "Rahul"

//     return function () {
//         console.log(name)
//     }
// }

// let name = "Aditi"

// outer()()// Rahul


// 3.
// function outer() {
//     let name = "Rahul"

//     function inner() {
//         console.log(name)
//     }

//     name = "Aditi"
//     return inner
// }

// outer()() //


// 4.
// function makeCounter() {
//     let count = 0;

//     return function () {
//         console.log(count++) //post increment
//     }
// }

// let counter = makeCounter()
// counter()//
// counter()//
// counter()//


// function makeCounter() {
//     let count = 0;

//     return function () {
//         console.log(count++) //post increment
//     }
// }

// let counter = makeCounter()
// let counter2 = makeCounter()
// console.log('------------------counter()')
// counter()//0
// counter()//1
// counter()//2

// console.log('------------------counter2()')
// counter2()//0
// counter2()//1
// counter2()//2