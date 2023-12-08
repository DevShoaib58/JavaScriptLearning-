// let n1 = Math.floor(Math.random() * 10000)
// let p1 = new Promise((resolve, rejected) => {
//     console.log("Promise is Pending")
//     setTimeout(() => {
//         console.log("I am Promise and i am Fulfilled")
//         resolve(true)
//     }, n1)
//     console.log('n1: ', n1);
// })
// let n2 = Math.floor(Math.random() * 10000)
// let p2 = new Promise((resolve, rejected) => {
//     console.log("Promise is Pending")
//     setTimeout(() => {
//         console.log("I am Promise and i am Rejected")
//         rejected(new Error("i'm Error"))
//     }, n2)
//     console.log('n2: ', n2);
//     // }, Math.floor(Math.random() * 10000) ) For random value in 9000
// })
// p1.then((value) => {
//     console.log(value);
// })
// p2.catch((error) => {
//     console.log("Throwing Some Error");
// })
// // if any one of them got error then all_promises wont run
// // let all_promises = Promise.all([p1, p2])
// let all_promises = Promise.allSettled([p1, p2])
// all_promises.then((value) => {
//     console.log("All Promises are resolved", value);
// })

// Try catch Error in JS
// setTimeout(() => {
//     console.log("Hello World! 1000")
// }, 1000)
// setTimeout(() => {
//     console.log("Hello World! 2000")
// }, 2000)
// try {
//     // Try to run this code
//     console.log(Hello);
// }
// catch (err) {
//     // if any error, Code throws the error
//     console.log(err);
// }
// setTimeout(() => {
//     console.log("Hello World! 3000")
// }, 3000)
// setTimeout(() => {
//     console.log("Hello World! 4000")
// }, 4000)
// setTimeout(() => {
//     console.log("Hello World! 5000")
// }, 5000)
// Try catch With Finally
// try {
//     console.log("Hello try");
//     console.log(lol);
// }
// catch (err) {
//     console.log(err);
//     console.log(caught);
// }
// finally {
//     console.log("Im Running anyway");
// }
// let p = fetch("https://randomuser.me/api/")
//     .then((response) => response.json(
//         console.log(response)
//     ))
// let p = fetch("https://randomuser.me/api/")
// p.then((response) => { return response.json() })
//     .then((response) => { console.log(response) })
//Fetch API
// fetch("https://randomuser.me/api/")
//     .then((respons) => respons.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => { console.log(error) })
const Call_API = async () => {
    let API = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => { console.log(json) })
}


// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//         title: 'Shoaib',
//         body: 'NoBody',
//         userId: 2,
//     }),
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const post_call = async () => {
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }
// post_call();