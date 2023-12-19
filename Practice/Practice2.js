// console.log("Console.log");
// console.error("Console.error");
// console.warn("Console.warn");

/************* Q1 Does you Age lies between 10 to 20 Using Logical Operator **************/
// let age = prompt("Enter your Age ")
// if (age => 10 && age <= 20) {
//     console.log(`Your age is Lies Between 10 To 20 and You Entered = ${age}`);
// } else {
//     console.log(`Yor age Does't lies Between 10 to 20 and You Entered = ${age}`);
// }

/************* Q2 How To Use Switch Statement in JS? **************/
// let day = prompt('Enter a Day');
// console.log('Day: ', typeof (day));
// day = parseInt(day)
// console.log('After Conversion Day: ', typeof (day));
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("invalid Number");
// }
/************* Q3 Write a Program to See if its Divisible by 2 and 3  in JS? **************/
// let RequestedNumber = prompt("Enter You Number")
// RequestedNumber = Number.parseInt(RequestedNumber)
// if ((RequestedNumber % 2 == 0) && (RequestedNumber % 3 == 0)) {
//     console.log(`The number is divisible by both 2 and 3 you have Enter this Number ${RequestedNumber}`);
//     // document.write("The number is divisible by both 2 and 3");
// } else (
//     // document.write("The number is not divisible by both 2 and 3")
//     console.log(`The number is not divisible by both 2 and 3 you have Enter this Number ${RequestedNumber}`)
// )
/************* Q4 Write a Program to See if its Divisible either by 2 and 3  in JS? **************/
// let NewNumber = prompt("Enter You Number")
// NewNumber = Number.parseInt(NewNumber)
// if ((NewNumber % 2 == 0) || (NewNumber % 3 == 0)) {
//     console.log(`The number is divisible by One of 2 or 3 you have Enter this Number ${NewNumber}`);
//     // document.write("The number is divisible by both 2 and 3");
// } else (
//     // document.write("The number is not divisible by both 2 and 3")
//     console.log(`The number is not divisible by both 2 and 3 you have Enter this Number ${NewNumber}`)
// )
/************* Q5 Write a Program to See You are Eligible to Drive or not over 18  in JS? **************/
// let EnterAge = prompt("Enter Your Age")
// EnterAge = Number.parseInt(EnterAge)
// if (EnterAge >= 18) {
//     console.log(`You Are Eligible To Drive You Have Entered Age ${EnterAge}`)
// } else {
//     console.log(`You Are Not Eligible To Drive You Have Entered Age ${EnterAge}`)
// }

// let EnterAge = prompt("Enter Your Age")
// EnterAge = Number.parseInt(EnterAge)
// // let Result = (EnterAge >= 18) ? "You Are Eligible to Drive " : "You Are Not Eligible to Drive "
// let Result = (EnterAge >= 18 ? `You Are Eligible to Drive ${EnterAge}` : `You Are Not Eligible to Drive ${EnterAge}`)
// console.log('Result: ', Result);

/************* Q6 Write a Program to see if 2 number are equal to 100 or the sum of the 2 numbers are equal to 100  in JS? **************/
// const isequal = (a, b) => {
//     if (a === 100 || b === 100 || a + b === 100) {
//         console.log("yes its true");
//     } else {
//         console.log("No its Not")
//     }
// }
// isequal(50, 50);
// let a = Number(prompt("Enter a"))
// let b = Number(prompt("Enter b"))
// const isequal2 = (a, b) => {
//     a === 100 || b === 100 || a + b === 100 ? console.log("yes one of the number or the sum of two numbers are equal to 100") : console.log("Not its not")
// }
// isequal2(a, b)