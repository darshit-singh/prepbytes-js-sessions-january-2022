// -------callback hell



// function printVowels() {
//     setTimeout(() => {
//         console.log("A");
//     }, 1000);
//     setTimeout(() => {
//         console.log("E");
//     }, 1000);
//     setTimeout(() => {
//         console.log("I");
//     }, 1000);
//     setTimeout(() => {
//         console.log("O");
//     }, 1000);
//     setTimeout(() => {
//         console.log("U");
//     }, 1000);
// }

// printVowels();

//if I want to print them one after other
// function printVowels() {
//     setTimeout(() => {
//         console.log("A");
//     }, 1000);
//     setTimeout(() => {
//         console.log("E");
//     }, 2000);
//     setTimeout(() => {
//         console.log("I");
//     }, 3000);
//     setTimeout(() => {
//         console.log("O");
//     }, 4000);
//     setTimeout(() => {
//         console.log("U");
//     }, 5000);
// }

// classic callback pyramid of doom:
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

// printVowels()



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



// ----------promise.all
// promise.all accepts an array
// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then((data) => { console.log(data) });

// Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.


// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject('Error! Promise 2 failed'), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject('Error! Promise 4 failed'), 3000))
// ])
//     .then(data => console.log(data))
//     .catch(err => console.error(err));











// *****************************************************************************************
// --------EXTRA

// setTimeout(() => {
//     console.log("call domino's")     //-----------task 1
//     let resolve = 'done1'            //------1 is complete
//     let reject = 'Error encountered in order!'
//     setTimeout(() => {
//         if (resolve === 'done1') {
//             console.log("domino's takes order") //--------------task 2
//             resolve = 'done2'                   //------2 is complete
//         }
//         else {
//             console.log(reject, 'task1 failed') //--------- task1 not done
//             return
//         }
//         setTimeout(() => {
//             if (resolve === 'done2') {
//                 console.log("domino's confirms order") //------------3
//                 resolve = 'done3'   //---------3 is complete
//             }
//             else {
//                 console.log(reject, 'task2 failed') //------task2 not done
//                 return
//             }
//             setTimeout(() => {
//                 if (resolve === 'done3') {
//                     console.log("order delivered")//-------------4
//                     resolve = 'done4' //---------4 is complete
//                 }
//                 else {
//                     console.log(reject, 'task3 failed')//--------task3 not done
//                     return
//                 }
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// pizza promise
// -------- Pizza example
// let promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("call domino's")
//     }, 1000)
// })
// let promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("domino's takes order")
//     }, 2000)
// })
// let promise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("domino's confirms order")
//     }, 3000)
// })
// let promise4 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("order gets delivered")
//     }, 4000)
// })

// promise1.then(result => console.log(result))
// promise2.then(result => console.log(result))
// promise3.then(result => console.log(result))
// promise4.then(result => console.log(result))

// promise1.then((result) => {
//     console.log(result) //------------------promise1 resolve
//     return promise2
// }).then((result) => {
//     console.log(result) //-------------------promise2 resolve
//     return promise3
// }).then((result) => {
//     console.log(result) // -----------------promise3 resolve
//     return promise4
// }).then((result) => {
//     console.log(result)// -------------------promise4 resolve
// }).catch((err) => {
//     console.error(err)
// })