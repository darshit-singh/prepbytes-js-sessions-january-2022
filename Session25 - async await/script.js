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



// let promiseA = new Promise((resolve, reject) => {
//     resolve("A")
// })

// console.log('Me first')

// setTimeout(() => {
//     console.log('timeout, callback queue')
// }, 0)

// promiseA.then((data) => {
//     console.log(data)
// })

// console.log('Me last')

// microtask queue

// event loop prioritizes the microtask queue



// -----------------------------------
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


// console.log('Me first')
// promiseA.then((data) => { console.log(data) })
// console.log('Before B')
// promiseB.then((data) => { console.log(data) })
// console.log('Me last')


// console.log('Me first')
// promiseA.then((data) => { //things inside then run only AFTER The promise is fulfilled
//     console.log(data)
//     console.log('Before B')
// })
// promiseB.then((data) => {
//     console.log(data)
//     console.log('Me last')
// })


// function printLetter(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log(letter)
//             resolve(letter)
//         }, 1000)
//     })
// }

// function printAlphabets() {
//     printLetter('A')
//         .then((data) => {
//             console.log(data)
//             console.log('Before B gets resolved')
//             return printLetter('B')
//         })
//         .then((data) => {
//             console.log(data)
//             console.log('Before C gets resolved')
//             return printLetter('C')
//         })
//         .then((data) => {
//             console.log(data)
//         })
// }

// printAlphabets()



// async await ------ "synctactic sugar" ------- meaning: it makes your code much more readable

// keyword async is used before a function; and then inside that function you can use await

// function printLetter(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log(letter)
//             resolve(letter)
//         }, 1000)
//     })
// }

// async function printAlphabets() { //because I have used async, now I can use await inside
//     let ans1 = await printLetter("A")
//     console.log(ans1) //A
//     console.log("Before B gets resolved")
//     let ans2 = await printLetter("B")
//     console.log(ans2) //B
//     console.log("Before C gets resolved")
//     let ans3 = await printLetter("C")
//     console.log(ans3) //C
// }

// printAlphabets()


// Question - you print these in order -> first, second, third

// console.log('first')

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("second")
//     }, 1000)
// })

// promise.then((result) => {
//     console.log(result)
//     console.log('third')
// })


// async function callMe() {
//     console.log("first")
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('second')
//             resolve()
//             // resolve("second") -----> need to assign promise to a variable to access resolved value
//         }, 1000)
//     })
//     console.log("third")
// }
// callMe()




// ----------cookies

// document.cookie = "user=Aditi" //name -> user, Value -> aditi

// document.cookie = "id=2"

// document.cookie = "admin=true"

// document.cookie = "user=rahul; max-age=1"

// console.log(document.cookie)

// // max-age - seconds*****         document.cookie = "user=Aditi; options"

// // to delete a cookie you can set max-age directly to -1

// document.cookie = "id=2; max-age=-1"




// --------------LocalStorage and SessionStorage
//local storage data will persist even after the browser is restarted

// localStorage.setItem(key, value)
// key and value both have to be strings
// localStorage.setItem('greetings', 'hi')
// localStorage.setItem('id', '2')

// console.log(localStorage.getItem('greetings'))

// setTimeout(() => {
//     localStorage.removeItem('greetings') //removes only that particular key
// }, 1000)

// setTimeout(() => {
//     localStorage.clear() //removes everything
// }, 2000)

// let data = {
//     firstName: 'Rahul',
//     lastName: 'sharma',
//     id: 2
// }

// // localStorage.setItem('obj', data)

// localStorage.setItem('obj', JSON.stringify(data))


// let getValue = JSON.parse(localStorage.getItem('obj'))

// console.log(getValue)

