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
/************* Q4 Find the factorial of given array in JS? **************/
// let number = [1, 2, 3, 4, 5, 6]
// let fact = number.reduce(function (n1, n2) {
//     return n1 * n2;
// }
//     , 1)
// console.log(`Factorial Of The Given Numbers Is :${fact}`)
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
/******************* Find Smallest Number From Array in JS *******************/
// let num = [10, 50, 51, 0, 41, 4, 5, 0, -1, 9]
// let smallest_number = Math.min(...num)
// let largest_number = Math.min(...num)
// console.log("Length of Array", num.length)
// console.log("Number on 4 index is 41 =", num[4])
// console.log("Smallest Number in Array", smallest_number_number)
// console.log("Largest Number in Array", largest_number)
/*******************Q7 Sorting An Array *******************/
// let num = [5, 10, 3, 8, -2,
//     15, 1, 12];
// num.sort(function (a, b) {
//     return a - b;
// });
// console.log(`Sorted Array Is :${num}`);
/*******************Q8 Searching an element in array *******************/
// let num = [10, 50, 60, 4, 0, 25, 5, 90, 70, 405, 8]
// let search = 10;
// let found = false;
// for (let i = 0; i < num.length; i++) {
//     if (search === num[i]) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     console.log(`Element Found`);
// } else {
//     console.log("Element Not Found")
// }
// let arr = [4, 5, 294, 14, 414, 51, 5, 64, 51, 542]
// let search = prompt("Enter Number to Search")
// search = Number.parseInt(search)
// let found = false
// for (i = 0; i < arr.length; i++) {
//     if (search === arr[i]) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     console.log(`Your Requested Number ${search} is Found `)
// } else {
//     console.log(`Your Requested Number ${search} is not Found `)
// }
/*******************Q6 Finding largest and smallest element from array *******************/
// let arr = [5, 10, 3, 8, -2, 15, 1, 12, 6, 4];
// let min = Math.min(...arr);
// let max = Math.max(...arr);
// console.log(`Smallest Element In Array Is :${min}`);
// console.log(`Largest Element In Array Is :${max}`);
/*******************Q7 Sorting An Array *******************/
// let num = [5, 10, 3, 8, -2, 15, 1, 12];
// num.sort(function (a, b) {
//   return a - b;
// });
// console.log(`Sorted Array Is :${num}`);
/*******************Q8 Searching an element in array *******************/
// let search = 10;
// let found = false;
// for (let i = 0; i < num.length; i++) {
//   if (search === num[i]) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   console.log(`Element Found`);
// } else {
//   console.log("Element Not Found");
// }

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
// let array = [10, 20, 6, 1, 5, 8, 11, 22, 55, 44, 99, 11, 54, 31, 38, 35, 44, 21, 4, 69]
// let result = array.sort((x, y) => { return x - y }
//     // let result = array.sort((x, y) => { return y - x }
// )
// console.log(result)

/******************* Finding Smallest and Largest Number in Array in JS *******************/
// let full_array = [20, 64, 4, 1, 321, 48, 153, 51, 34, 0, 31, 841, 3]
// let small_number = Math.min(...full_array)
// let large_number = Math.max(...full_array)
// console.log("Your Array is here", small_number)
// console.log("Your Array is here", large_number)

/******************* Calculate the BMI of Person and Show the Highest BMI in JS *******************/
// let ShoaibWeight = 72
// let ShoaibHeight = 82
// let BilalWeight = 80
// let BilalHeight = 90
// let ShoaibBMI = ShoaibWeight / ShoaibHeight ** 2
// let BilalBMI = BilalWeight / BilalHeight ** 2
// console.log("Bilal BMI", BilalBMI)
// console.log("Shoaib BMI", ShoaibBMI)
// if (BilalBMI > ShoaibBMI) {
//     console.log(`Bilal Has Higher BMI`, BilalBMI)
// } else {
//     console.log(`Shoaib Has Higher BMI`, ShoaibBMI)
// }

/******************* Asyn Function in JS *******************/
// console.log("Start")
// setTimeout(function (hello) {
//     console.log("Hello i'm Late")

// }, 1000)
// console.log("End")
/*******************  Change value Object in JS *******************/
// let student = {
//     name: "Shoaib",
//     age: 26,
// }
// student.age = student.age + 1
// console.log('student: ', student.age);
// let product = {
//     product_title: "UniBall Vision Elite",
//     ink_color: "Black",
//     rating: 4.2,
//     price: 270,
//     sale_price: 260
// }
// let a = 10;
// let b = 5;
// console.log("a+b=", a + b);//15
// console.log("a-b=", a - b);//5
// console.log("a*b=", a * b);//50
// console.log("a/b=", a / b);//2
// console.log("a**b=", a ** b);//100000
// console.log("a%b=", a % b);//0
// console.log("++a=", ++a);//11
// console.log("--b=", --b);//4


// Array Length in JS
// let arr = [10, 20, 3]
// for (index = 0; index < arr.length; index++) {
//     console.log("Element at index ", index, " is : ", arr[index])
// }
// console.log("Length of array is :", arr.length) // Output will be
// Array using For of Loop
// let cars = ["BMW", "Toyota", "Suzuki", "Honda"]
// for (car of cars) {
//     console.log("Car Name : ", car)
// }
// Average of Array using For of Loop
// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0;
// for (let mark of marks) {
//     sum = sum + mark
// }
// console.log('sum: ', sum);
// console.log("Average Marks are " + (sum / marks.length))
// let Products = [100, 500, 6, 550, 22, 45]
// let i = 0;
// for (let item of Products) {
//     // console.log(`This is the Index of Array ${i} Items list from Array ${item}`)
//     let offer = Products[i] / 10;
//     Products[i] -= offer;
//     console.log(`Here is Your new Update List of Products ${Products[i]}`)
//     i++
// }
// let array = [
//   10, 20, 6, 1, 5, 8, 11, 22, 55, 44, 99, 11, 54, 31, 38, 35, 44, 21, 4, 69,
// ];
// let result = array.sort(
//   (x, y) => {
//     return x - y;
//   }
//   // let result = array.sort((x, y) => { return y - x }
// );
// console.log(result);
// let fruit = [
//   "apple",
//   "mango",
//   "banana",
//   "orange",
//   "pineapple",
//   "kinwi",
//   "melon",
//   "watermelon",
// ];
// let result1 = fruit.sort();
// let result2 = fruit.reverse();
// console.log("Sorting", result1);
// console.log("Reverse", result2);
//Working on JS Function
// function experience() {
//     console.log("You Current Experience is ", currentYear - working)
// }
// let working = prompt("Enter your Working years")
// working = parseInt(working);
// let currentYear = 2024;
// experience();
// console.log(typeof (working));


// function sum(a, b) {
//     s = a + b;
//     console.log("Before Return Code");
//     return s;
//     //This code will never run
//     console.log("After Return Code");
// }
// console.log(sum(7, 5))


// const sum = (x, y) => {
//     return s = x + y;
// }
// sum(6, 8);
// console.log(s);
// const countVowels = (str) => {
//     let count = 0;
//     for (let char of str) {
//         // console.log(char)
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++

//         }
//     }
//     console.log(count)
// }
// countVowels('Hello World!');
// countVowels('I Love JS');
// countVowels('why');




// let arr = [1, 2, 5, 7, 8, 7, 5, 54, 6]
// arr.forEach(function showNumber(val) {
//     console.log(val)
// })


// let arr = [2, 4, 6, 8, 10]
// arr.forEach(element => {
//     // console.log(element);
//     let Square = element * element
//     console.log('Square: ', Square);
// });

// let marks = [22, 44, 55, 88, 99, 20, 90]
// marks = marks.sort((a, b) => a - b)
// console.log("Sorted array is : ", marks)

// let student = marks.filter((val) => {
//     return val > 90
// }
// )
// console.log(student)
// function say1(message) {
//     console.log(message);
// }
// let result1 = say1('Hello');
// console.log('Result1:', result1);


// function say(message) {
//     return message
// }
// let result = say('Hello');
// console.log('Result:', result);
// console.log(document.body);
// console.dir(document.body);