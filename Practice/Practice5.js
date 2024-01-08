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
// const arr = [50, 21, 630, 45, 5, 0, 48, 50, 20, 48, 40, 60, 100, 90, 100]
// let result = arr.filter(num => num % 10 == 0)
// console.log(`Numbers Divisible By 10 are :${result}`)
// console.log(`Total Numbers :${arr}`)

/************* Q3 Create an array or square of numbers  in JS? **************/
// let arr_num = [10, 20, 30, 40, 50, 60, 7, 8, 9]
// let square = arr_num.map((n) => n * n)
// console.log(`Square Of Given Numbers Are:${square}`)
/************* Q4 Find the fictorail of given array in JS? **************/
// let number = [1, 2, 3, 4, 5, 6]
// let fact = number.reduce(function (n1, n2) {
//     return n1 * n2;
// }
//     , 1)
// console.log(`Fictorial Of The Given Numbers Is :${fact}`)
// let n = prompt("Enter any Number")
// n = Number.parseInt(n)
// console.log("Input Number is ", n)
// let fact = 1;
// for (i = 1; i < n; i++) {
//     // fact *= n
//     fact = fact * n
// }
// console.log(`Factorial of Number ${n} is ${fact}`)
/******************* Leap year in JS *******************/
// let yr = prompt("Enter the Year")
// yr = Number.parseInt(yr)
// if (yr % 4 === 0 || yr % 100 != 0 || yr % 400 == 0) {
//     console.log(`${yr} is a Leap Year`)
// }
// else {
//     console.log(`${yr} is an Leap Year`)
// }
/*******************Q5 Checking leap year or not *******************/
// let yr = prompt('Please Enter a Year')
// yr = Number.parseInt(yr)
// if ((yr % 4 == 0 && yr % 100 != 0
//     || yr % 400 == 0)) {
//     document.write("<h2>It's A Leap Year</h2>");
// } else {
//     document.write("<h2>Not A Leap Year</h2>");
// }
/*******************Q6 Finding largest and smallest element from array *******************/
let arr = [5, 10, 3, 8, -2,
    15, 1, 12, 6, 4]
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log(`Smallest Element In Array Is :${min}`);
console.log(`Largest Element In Array Is :${max}`);
/*******************Q7 Sorting An Array *******************/
let num = [5, 10, 3, 8, -2,
    15, 1, 12];
num.sort(function (a, b) {
    return a - b;
});
console.log(`Sorted Array Is :${num}`);
/*******************Q8 Searching an element in array *******************/
let search = 10;
let found = false;
for (let i = 0; i < num.length; i++) {
    if (search === num[i]) {
        found = true;
        break;
    }
}
if (found) {
    console.log(`Element Found`);
} else {
    console.log("Element Not Found")
}

/*******************Q9 Define Simple Function in JS *******************/
// a = prompt("Enter Number a")
// a = Number.parseInt(a)
// b = prompt("Enter Number b")
// b = Number.parseInt(b)
// function sum(a, b) {
//     document.write(a + b)
// }
// sum(a, b)

/*******************Q10 Sort an array in JS *******************/
let array = [10, 20, 6, 1, 5, 8, 11, 22, 55, 44, 99, 11, 54, 31, 38, 35, 44, 21, 4, 69]
let result = array.sort((x, y) => { return x - y }
    // let result = array.sort((x, y) => { return y - x }
)
console.log(result)