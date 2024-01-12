/************* Check User can drive or not in JS? **************/
function canDrive() {
    let InputAge = prompt("Enter Your Age")
    InputAge = Number.parseInt(InputAge)
    if (InputAge >= 18) {
        alert("You can Drive")
    } else {
        alert("You cannot drive moye moye ")
    }
}
canDrive();
let RunAgain = prompt("Want to Run this Program Again ? Enter Y / N")
RunAgain = "Y"
if (RunAgain == "Y") {
    canDrive();
} else {
    alert("Thanks for Using our Program ")
}