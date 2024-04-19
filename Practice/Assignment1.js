/************* Q1 Write a program that calculates financial interest on some principal amount. It inputs principal amount, rate of interest and Coordinate number of years. Finally the program should calculate the interest amount and display using suitable output prompt messages to illustrate your screen outputs. in JS? **************/
// Prompt the user to enter the principal amount
// let loan = prompt("Enter Your Loan amount")
// let intersetRate = prompt("Enter interset Rate in Percentage")
// let Year = prompt("How many year  you want to pay your loan?");
// let result = (loan * intersetRate * Year) / 100
// alert(result)
/************* Q2 Write a program that input a character and display its ASCII code. Use suitable prompt messages to illustrate your working in JS? **************/
// let char = prompt('Please Enter a character');
// // let result = char.charCodeAt(char.length - 1)
// //Here 0 indicate the index of upper Character
// let result = char.charCodeAt(0)
// console.log(`ASCII Charactor of ${char} is this = ${result}`)
// Write a program that input a character and display its ASCII code. Use suitable prompt messages to illustrate your working.?
/************* Q3  Write a program that asks the user to type two integers A and B and exchange the value of A and B in JS? **************/
// let A = prompt("Enter the Value of A")
// A = parseInt(A)
// let B = prompt("Enter the Value of B")
// B = parseInt(B)
// let C;
// C = A;
// A = B;
// B = C;
// console.log('A: ', A);
// console.log('B: ', B);
// Write a program that asks the user to type two integers A and B and exchange the value of A and B ?

/************* Q4 Write a program that inputs the coordinate values of two points x, y into some variables. The program should automatically calculate and display the distance between these two points using distance formula as given below in JS? **************/
// let x1 = parseFloat(prompt("please enter x1 Coordinate"));
// let y1 = parseFloat(prompt("please enter y1 Coordinate"));
// let x2 = parseFloat(prompt("please enter x2 Coordinate"));
// let y2 = parseFloat(prompt("please enter y2 Coordinate"));
// let distance = parseFloat(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)))
// console.log('distance: ', distance);

/************* Q5 Write a program that prompt to input a five digits integer number and display its digits in reverse order. For example the user enter a five digits number as 12345. The program should display it as 54321 on output screen. in JS? **************/

// let Num = prompt("Enter Number ");
// if (Num != 0 || isNaN(Num)) {
//     alert("Please Enter 5 Digit Number ")
// } else {
//     function reverseSTR(Num) {
//         return Num.split("").reverse().join("")
//     }
//     console.log(reverseSTR(Num));
// }
/************* Q6 Write a program that input weight in pounds and convert it into equivalent kilograms. in JS? **************/
// let WeightPound = parseInt(prompt("Enter Weight in Pound : "));
// let WeightKG = WeightPound / 2.2046
// console.log('WeightKG: ', WeightKG.toFixed(4));

/************* Q7 Write a program that input temperature in Centigrade and convert it into Fahrenheit. in JS? **************/
// let Centigarde = parseFloat(prompt("Enter Temperature in Celsius : "));
// let F = (Centigarde * 9) / 5 + 32
// console.log('F: ', F);

/************* Q8 Write a program that input your age in years. It converts it into months, weeks, days, hours and minutes. Use suitable prompt messages on output screen. in JS? **************/
// let AgeYear = parseInt(prompt("Enter Your Age in Years"))
// console.log('Your Age in Years: ', AgeYear);
// let months = AgeYear * 12
// console.log('Your Age in Months: ', months);
// let weeks = months * 52
// console.log('Your Age in Weeks: ', weeks);
// let days = weeks * 365
// console.log('Your Age in Days: ', days);
// let hours = days * 24
// console.log('Your Age in Hours: ', hours);
// let minutes = hours * 60
// console.log('Your Age in Minutes: ', minutes);
// let sec = minutes * 60
// console.log('Your Age in Seconds: ', sec);
/************* Q9 Write a program that input height, weight, and length of a cubic object. The program should calculate the volume of that cubic object and display using appropriate prompt messages. in JS? **************/
// let length = parseInt(prompt("Enter Length of the Cube"))
// let width = parseInt(prompt("Enter Width of the Cube"))
// let height = parseInt(prompt("Enter Height of the Cube"))
// if (isNaN(Number(length, width, height))) {
//     alert("Enter Valid Numbers")

// } else {
//     let VolumeOfCube = length * width * height;
//     console.log('Volume Of Cube: ', VolumeOfCube);
// }

/************* Q10 Write a program that inputs the radius of a circle. The program should calculate three things of that circle and display on the output screen. Diameter Area Circumference  in JS? **************/
// let radius = parseInt(prompt("Enter Radius of Circle "))
// let Pi = 3.1416;
// let diameter = 2 * radius;
// console.log('diameter: ', diameter);
// let Circumference = Pi * diameter;
// console.log('Circumference: ', Circumference);
// let Area = Pi * (radius ** 2)
// console.log('Area: ', Area);
/************* Q11 Write a program that inputs the distance (in km) between two cities, speed of the vehicle and distance covered in one liter of fuel. The program should calculate the time required to reach the destination. It also tells the user that how much fuel is required to reach the destination. in JS? **************/
// let distance = 500;
// let speed = 60;
// let per_liter = 20;
// let time = distance / speed;
// console.log('time in Hours: ', time.toFixed(0));
// let time2 = distance % speed;
// console.log('Second: ', time2);
// let required_fuel = distance / per_liter;
// console.log('required_fuel: ', required_fuel);
/************* Q11 Write a program that inputs time in minutes in a long variable. The program should compute the number of hours, days, weeks and months separately and display them on console screen. in JS? **************/
// let timeinMinutes = parseInt(prompt("Enter Long Length of Time "))
// const minutesinhour = 60;
// const hoursinday = 24;
// const daysinweek = 7;
// const daysinmonth = 30;
// const hours = Math.floor(timeinMinutes / minutesinhour);
// const days = Math.floor(timeinMinutes / hoursinday)
// const week = Math.floor(timeinMinutes / daysinweek)
// const months = Math.floor(timeinMinutes / daysinmonth)
// console.log(`The ${timeinMinutes} Minutes in Hours are ${hours} `)
// console.log(`The ${timeinMinutes} Minutes in Days are ${days} `)
// console.log(`The ${timeinMinutes} Minutes in Week are ${week} `)
// console.log(`The ${timeinMinutes} Minutes in Months are ${months} `)