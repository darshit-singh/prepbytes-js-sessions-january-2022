//synchronous behaviour
// function printAlphabets() {
//     console.log("A")
//     console.log("B")
//     console.log("C")
//     console.log("D")
//     console.log("E")
// }

// printAlphabets()

// Q - modify the function printAlphabets so that ABCDE are printed after 1 second each


// function printAlphabets() {
//     setTimeout(() => {
//         console.log("A")
//     }, 1000)
//     setTimeout(() => {
//         console.log("B")
//     }, 2000)
//     setTimeout(() => {
//         console.log("C")
//     }, 3000)
//     setTimeout(() => {
//         console.log("D")
//     }, 4000)
//     setTimeout(() => {
//         console.log("E")
//     }, 5000)
// }
// printAlphabets()

//without Dry
// function print(char, delay) {
//     setTimeout(() => {
//         console.log(char)
//     }, delay)
// }

// print("A", 1000)
// print("B", 2000)
// print("C", 3000)
// print("D", 4000)
// print("E", 5000)



// nested callbacks
// setTimeout(() => {
//     console.log("First")
//     setTimeout(() => {
//         console.log("Second")
//     }, 2000)
// }, 2000)


// function printAlphabets() {
//     setTimeout(() => {
//         console.log("A")
//         setTimeout(() => {
//             console.log("B")
//             setTimeout(() => {
//                 console.log("C")
//                 setTimeout(() => {
//                     console.log("D")
//                     setTimeout(() => {
//                         console.log("E")
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// printAlphabets()


// function printLetter(letter, cb) {
//     setTimeout(() => {
//         console.log(letter)
//         cb()
//     }, 1000)
// }


// function printPattern() {
//     printLetter("A", () => {
//         printLetter("B", () => {
//             printLetter("C", () => {
//                 printLetter("D", () => {
//                     printLetter("E", () => {
//                         console.log('done')
//                     })
//                 })
//             })
//         })
//     })
// }

// printPattern()


// Promises ---


// let promise1 = new Promise((resolve, reject) => {
//     console.log('random operations')

//     setTimeout(() => {
//         let firstName = "Rahul" //came from DB
//         // resolve(firstName)
//         // reject('promise was rejected')
//         reject('data was not found')
//     }, 3000) //make a call to some DB

//     // get something back ----> resolved
// })


// promise1.then((result) => {
//     console.log(result) //changes what you want to do with the new value
//     console.log('.then callback runs')
// }).catch((result) => {
//     console.log(result)
//     // console.log('inside catch, this runs if promise is rejected')
// })


// function printNum(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 == 0) {
//             resolve("condition satisfied")
//         }
//         else {
//             reject("condition not satisfied")
//         }
//     })
// }

// printNum(24).then(result => console.log(result)).catch(result => console.log(result))
// printNum(25).then(result => console.log(result)).catch(result => console.log(result))


// first approach
// let promiseA = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("A") }, 1000)
// })
// let promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("B") }, 2000)
// })
// let promiseC = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("C") }, 3000)
// })
// let promiseD = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("D") }, 4000)
// })

// promiseA.then(result => console.log(result))
// promiseB.then(result => console.log(result))
// promiseC.then(result => console.log(result))
// promiseD.then(result => console.log(result))



// function callPromise(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(letter)
//         }, 1000)
//     })
// }


// callPromise("A").then((result) => {
//     console.log(result)
//     callPromise("B").then((result) => {
//         console.log(result)
//         callPromise("C").then((result) => {
//             console.log(result)
//             callPromise("D").then((result) => {
//                 console.log(result)
//             })
//         })
//     })
// })


// --------promise chaining, this solves callback hell

// function callPromise(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(letter)
//             resolve(1)
//         }, 1000)
//     })
// }
// callPromise("A")
// callPromise("A").then(() => {
//     return callPromise("B")
// }).then(() => {
//     return callPromise("C")
// }).then(() => {
//     return callPromise("D")
// })


//promise chaining
// callPromise("A")
//     .then(() => callPromise("B"))
//     .then(() => callPromise("C"))
//     .then(() => callPromise("D"))






//closure doubt
// function cb(a) {
//     setTimeout(function () {
//         console.log(a)
//     }, a * 1000);
// }

// function print() {
//     for (var i = 1; i <= 7; i++) {
//         cb(i) //value of i
//     }
// }
// print()







