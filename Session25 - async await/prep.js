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

//extra consoles
// function printAlphabets() {
//     printLetter("A")
//         .then(() => {
//             console.log("Me before B")
//             return printLetter("B")
//         })
//         .then(() => {
//             console.log("Me before C")
//             return printLetter("C")
//         })
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

// async function printAlphabets() {
//     try {
//         let ans1 = await printLetter("A")
//         console.log(ans1)
//         console.log("Me before B")
//         let ans2 = await printLetter("B")
//         console.log(ans2)
//         console.log("Me before C")
//         let ans3 = await printLetter("C")
//         console.log(ans3)
//     }
//     catch (err) {                       //rejected things
//         console.log(err)
//     }
// }

// printAlphabets()

// -----------------Question
// print these in order.
// console.log('Me first')
// setTimeout(() => {
//     console.log('Me second')
// }, 2000)
// console.log('Me third')

//-------- answer
// console.log('Me first')
// let promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Me second')
//     }, 2000)
// })
// promise.then((data) => {
//     console.log(data)
//     console.log('Me third')
// })


// ----------async await answer

// async function printValues() {
//     let promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Me second')
//         }, 2000)
//     })
//     console.log('Me first')
//     let result = await promise
//     console.log(result)
//     console.log('Me third')
// }
// printValues()


// ------------cookies
// A write operation to document.cookie updates only cookies mentioned in it, but doesn’t touch other cookies.

// On each page request cookies are sent to the server


// document.cookie = "user=Aditi";
// document.cookie = "id=2";
// document.cookie = "admin=true";
// document.cookie = "user=Rahul" // update only cookie named 'user'
// console.log(document.cookie);

// If you run it, then probably you’ll see multiple cookies. That’s because the document.cookie= operation does not overwrite all cookies. It only sets the mentioned cookie user.

// The name=value pair, after encodeURIComponent, should not exceed 4KB. So we can’t store anything huge in a cookie.
// The total number of cookies per domain is limited to around 20+, the exact limit depends on the browser.
// document.cookie = "user=Rahul; max-age=1" //deleting rahul, max-age is in seconds
// console.log(document.cookie)

// ------to delete a cookie just give max-age as -1




//-------------------------- Localstorage vs session storage
// Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.

// What’s interesting about them is that the data survives a page refresh (for sessionStorage) and even a full browser restart (for localStorage). We’ll see that very soon.

// Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most browsers allow at least 2 megabytes of data (or more) and have settings to configure that.

// Also unlike cookies, the server can’t manipulate storage objects via HTTP headers. Everything’s done in JavaScript.

// localStorage.setItem(key, value)
// localStorage.setItem('greetings', 'hi') //set

// console.log(localStorage.getItem('greetings')) //get


// We can also use a plain object way of getting/setting keys, like this:
// localStorage.name = 'Rahul'

// console.log(localStorage.name)
// console.log('accessing through getItem', localStorage.getItem('name'))

// please note that both key and value must be strings.

// If were any other type, like a number, or an object, it gets converted to string automatically:

// How to store object in localStorage
// let obj = { firstName: 'rahul' }

// localStorage.setItem('admin', obj)

// //use JSON.stringify

// localStorage.setItem('admin', JSON.stringify(obj))

// let output = JSON.parse(localStorage.getItem('admin'))
// console.log(output)




// -------Session storage
// The sessionStorage object is used much less often than localStorage.

// Properties and methods are the same, but it’s much more limited:

//1. The sessionStorage exists only within the current browser tab.

//2. Another tab with the same page will have a different storage.

//3. But it is shared between iframes in the same tab (assuming they come from the same origin).

//4. The data survives page refresh, but not closing/opening the tab.







// -----------EXTRA
// ---------make the printLetter function as async
// remember: async function ALWAYS returns a promise

// async function printLetter(letter) {
//     let pr = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`${letter} is resolved`)
//         }, 1000);
//     })
//     return await pr
// }

// async function printAlphabets() {
//     let a1 = await printLetter("A")
//     console.log(a1)
//     let a2 = await printLetter("B")
//     console.log(a2)
//     let a3 = await printLetter("C")
//     console.log(a3)
// }

// printAlphabets()
