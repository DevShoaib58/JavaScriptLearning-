/************* Q1 and Q2 Check User can drive or not and also ask him again to re run the program in JS? **************/
// function canDrive() {
//     let InputAge = prompt("Enter Your Age")
//     InputAge = Number.parseInt(InputAge)
//     if (InputAge >= 18) {
//         alert("You can Drive")
//     } else {
//         alert("You cannot drive moye moye ")
//     }
//     let RunAgain = prompt("Want to Run this Program Again ? Enter yes / no")
//     if (RunAgain.toLocaleLowerCase() === "yes") {
//         canDrive();
//     } else {
//         alert("Thanks for Using our Program ")
//     }
// }
// canDrive();
/************* Q3 Redirect user to Google if Number is Greater then 4 in JS? **************/
// let number = prompt("Enter Your Number")
// number = Number.parseInt(number)
// if (number > 4) {
//     window.open("https://www.google.com", "_self")
// } else {
//     console.log("Stay Here")
// }
/************* Q4 Change Background Color or Body  in JS? **************/
// if (changeColor == "red" || changeColor == "blue" || changeColor == "yellow") {
//     document.style.body(changeColor)
// } else {
//     alert("Try These Colors ,red,yellow,blue")
// }
let changeColor = prompt("Enter Your color")
console.log('changeColor: ', changeColor);
document.body.style.backgroundColor = changeColor