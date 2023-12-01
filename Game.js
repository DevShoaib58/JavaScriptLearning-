let n1 = Math.floor(Math.random() * 10000)
let p1 = new Promise((resolve, rejected) => {
    console.log("Promise is Pending")
    setTimeout(() => {
        console.log("I am Promise and i am Fulfilled")
        resolve(true)
    }, n1)
    console.log('n1: ', n1);
})
let n2 = Math.floor(Math.random() * 10000)
let p2 = new Promise((resolve, rejected) => {
    console.log("Promise is Pending")
    setTimeout(() => {
        console.log("I am Promise and i am Rejected")
        rejected(new Error("i'm Error"))
    }, n2)
    console.log('n2: ', n2);
    // }, Math.floor(Math.random() * 10000) ) For random value in 9000 
})
p1.then((value) => {
    console.log(value);
})
p2.catch((error) => {
    console.log("Throwing Some Error");
})
// let all_promises = Promise.all([p1, p2])
let all_promises = Promise.allSettled([p1, p2])
all_promises.then((value) => {
    console.log("All Promises are resolved", value);
})