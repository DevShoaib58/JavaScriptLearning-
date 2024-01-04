/************* Q1 Create an array and add number from user in it in JS? **************/
// const marks = [10, 20, 30, 40, 50, 60, 70]
// let add_number = prompt("Enter one number")
// add_number = Number.parseInt(add_number);
// marks.push(add_number);
// console.log(`The new array is ${marks}`);
/************* Q2 Keep adding number to the array until 0 is not added  in JS? **************/
// let arr = [10, 20, 30,]
// let add_number;
// do {
//     add_number = prompt("Enter Your Number ")
//     add_number = Number.parseInt(add_number)
//     console.log(add_number)
//     // console.log(typeof (add_number))
//     // console.log(typeof (arr))
//     arr.push(add_number);
// } while (add_number != 0) {
//     console.log(arr)
// }
/************* Q3 filter number divisible by 10  in JS? **************/
const arr = [50, 21, 630, 45, 5, 0, 48, 50, 20, 48, 40, 60, 100, 90, 100]
let result = arr.filter(num => num % 10 == 0)
console.log(`Numbers Divisible By 10 are :${result}`)
console.log(`Total Numbers :${arr}`)