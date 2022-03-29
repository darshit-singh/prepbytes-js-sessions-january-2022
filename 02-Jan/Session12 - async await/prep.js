//---------------- ASYNC AWAIT
// let promiseA = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("A") }, 1000)
// })
// let promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("B") }, 2000)
// })
// let promiseC = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("C") }, 3000)
// })


// ----------what if I remove setTimeout
// let promiseA = new Promise((res, rej) => {
//     res('A resolved')
// })

// console.log('Me first')
// promiseA.then(result => console.log(result))
// promiseB.then(result => console.log(result))
// promiseC.then(result => console.log(result))
// console.log('Me last')

// console.log('Me first')
// promiseA.then(result => console.log(result))
// promiseB.then(result => console.log(result))
// promiseC.then(result => {
//     console.log(result)
//     console.log('Me last')
// })

//------micro task queue
// promise has more priority than setTimeout


// -------------async await
// function printLetter(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(letter)
//             resolve(`ans resolved ${letter}`)
//         }, 1000)
//     })
// }

// function printAlphabets() {
//     printLetter("A")
//         .then(() => printLetter("B"))
//         .then(() => printLetter("C"))
//         .then(() => printLetter("D"))
// }

// printAlphabets()



// Async await.... Just synctactic sugar (means easier to read)

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