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
let Subject = {
    Shoaib: 91,
    Bilal: 88,
    Umer: 44,
}
for (let i = 0; i < Object.keys(Subject).length; i++) {
    console.log(" Student", Object.keys(Subject)[i] + " who got ", Subject[Object.keys(Subject)[i]], "in Urdu")
}