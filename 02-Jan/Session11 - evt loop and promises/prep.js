//explain event loop
// --------setTimeout

// function cb() {
//     console.log('After timeout')
// }

// function printSomething() {
//     console.log('print something')
// }

// console.log("Me first")

// setTimeout(cb, 2000)
// setTimeout(cb, 0)

// printSomething()

// console.log("Me second")


//--------- Promises

//synchronous behaviour
// function printAlphabets() {
//     console.log("A")
//     console.log("B")
//     console.log("C")
//     console.log("D")
//     console.log("E")
// }

// Q - modify the function printAlphabets so that ABCDE are printed after 1 second each

// A -
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


// But I want to keep the delay fixed at 1000
//---------nested callback
// function printValue() {
//     setTimeout(() => {
//         console.log("A");
//         setTimeout(() => {
//             console.log("B");
//         }, 2000);
//     }, 2000);
// }
// printValue()


// function printVowels() {
//     setTimeout(() => {
//         console.log('A')
//         setTimeout(() => {
//             console.log('E')
//             setTimeout(() => {
//                 console.log('I')
//                 setTimeout(() => {
//                     console.log('O')
//                     setTimeout(() => {
//                         console.log('U')
//                         console.log('End')
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }


//-----------------WITH A FUNCTION
// function printLetter(letter, cb) {
//     setTimeout(() => {
//         console.log(letter)
//         cb()
//     }, 1000)
// }

// function printVowels() {
//     printLetter('A', () => {
//         printLetter('E', () => {
//             printLetter('I', () => {
//                 printLetter('O', () => {
//                     printLetter('U', () => {
//                         console.log('End') //------------callback hell
//                     })
//                 })
//             })
//         })
//     })
// }
// printVowels()



// To solve callback hell JS came up with something known as promises.


// ------------PROMISE SYNTAX

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// function printNum(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 == 0) {
//             resolve("CONDITION SATISFIED");
//         } else {
//             reject("CONDITION UNSATISFIED");
//         }
//     })
// }


// printNum(25)
//     .then((response) => {             //to handle success response
//         console.log(response);
//     })
//     .catch((error) => {               //to handle failure
//         console.log(error);
//     })
//     .finally(() => {                  //runs in both cases; reject and resolve
//         console.log("PROMISE IS COMPLETED");
//     })

// let promise1 = new Promise((resolve, reject) => {
//     console.log("Promise1 called")
//     // resolve('data')
//     reject()
//     // resolve('promise1 resolved')
// })

// promise1.then((result) => { console.log('hi', result) }).catch(() => { console.log('promise failed') }) //then takes in an arrow function

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

// promiseA.then((result) => { console.log(result) })
// promiseB.then((result) => { console.log(result) })


// function callPromise(alphabet) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(alphabet)
//         }, 1000)
//     })
// }

// callPromise("A").then((res) => {
//     console.log(res)
//     callPromise("B").then((res) => {
//         console.log(res)
//         callPromise("C").then((res) => {
//             console.log(res)
//             callPromise("D").then((res) => {
//                 console.log(res)
//                 callPromise("E").then((res) => {
//                     console.log(res)
//                 })
//             })
//         })
//     })
// })



// function callPromise(alphabet) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(alphabet)
//             resolve()
//         }, 1000)
//     })
// }

// callPromise("A").then(() => {
//     callPromise("B").then(() => {
//         callPromise("C").then(() => {
//             callPromise("D").then(() => {
//                 callPromise("E")
//             })
//         })
//     })
// })

// ----------promise chaining
// function callPromise(alphabet) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(alphabet)
//             resolve('promise done')
//         }, 1000)
//     })
// }
// callPromise("A")
//     .then(() => callPromise("B")) // ----------Then returns a promise so that a .then can be used
//     .then(() => callPromise("C"))
//     .then(() => callPromise("D"))
//     .then(() => callPromise("E"))


// Always return results, otherwise callbacks won't catch the result of a previous promise (with arrow functions () => x is short for () => { return x; }).









