// console.log("Console.log");
// console.error("Console.error");
// console.warn("Console.warn");
/************* Q1 write a Program to Show the Marks of Students using for Loop in JS? **************/
// let English = {
//     Shoaib: 70,
//     Farah: 85,
//     Faisal: 92,
// }
// for (let i = 0; i < Object.keys(English).length; i++) {
//     console.log("For Name", Object.keys(English)[i])
//     console.log("For Marks", English[Object.keys(English)[i]])
// }
// let Urdu = [10, 20, 3, 5, 64, 54,]
// for (let i = 0; i < Urdu.length; i++) {
//     console.log(i)
// }
/************* Q2 write a Program to Show the Marks of Students using for in Loop in JS? **************/
// let Subject = {
//     Shoaib: 91,
//     Bilal: 88,
//     Umer: 44,
// }
// for (let key in Subject) {
//     console.log(key, "got ", Subject[key], "Marks in Physics")
// }
// /************* Q3 write Program to display try again till user entered the right number  in JS? **************/
// let CorrectNumber = 20;
// let YourNumber;
// while (YourNumber != CorrectNumber) {
//     YourNumber = prompt("Enter Your Number")
//     console.log("Try aging")
// }
// console.log(`You Won Correct Number is ${YourNumber}`)
// /************* Q4 write Function to to find the mean of 5 number  in JS? **************/
// const mean = (a, b, c, d, e) => {
//     return (a + b + c + d + e) / 4
// }
// console.log(mean(2, 3, 4, 5, 6));



/************* Q5 Write a JS code to print numbers from 1 to 10  **************/
// for (i = 1; i <= 10; i++) {
//     console.log("These Are the Number", i)
// }
/************* Q6 Write a JS code to Sum two Array  **************/
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let joining = () => {
//     console.log("Joining Array", [...arr1, ...arr2])
//     const wholesum = arr1.map((num, index) => {
//         console.log("Sum", num + arr2[index],)
//     })
// }
// joining()

/************* Q7 Write a JS code in forin loop to show data of object  **************/
// let person = {
//     name: "Shoaib",
//     age: 26,
//     Job: "Web Developer"
// }
// for (let key in person) {
//     // console.log(key, ":", person[key])
//     // Always use forin Loop for object its simple and easy to use
// }
// // Working with Array of Object
// let person1 = [
//     "Shoaib", "Mahmmood", " Qureshi",
//     person = {
//         name: "Shoaib",
//         age: 26,
//         Job: "Web Developer"
//     }
// ]
// for (i = 0; i < 5; i++) {
//     console.log(person1[i]);
// }
/************* Q7 Make pattern in  JS code  **************/
// let num = "*"
// for (let i = 0; i < 5; i++) {
//     console.log(num);
//     console.log(num);
// }