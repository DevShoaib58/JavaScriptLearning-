// console.log(RandomNumber)
// console.log(EnteredNumber)
// console.log(typeof (EnteredNumber))
//This Will Only tell you the Number is Correct or Not
// if (EnteredNumber === RandomNumber) {
//     console.log(`You Have Entered the Right Number your Entered Number is ${EnteredNumber} and Random Number is ${RandomNumber} `)
// } else {
//     console.log(`You Have Entered the Wrong Number your Entered Number is ${EnteredNumber} and Random Number is ${RandomNumber} `)
// }
// }
const Game = (attempts = 0) => {
    let RandomNumber = parseInt(Math.random() * 5);
    // let attempts = 0;
    let EnteredNumber = prompt("Enter Number")
    // while (RandomNumber != EnteredNumber) {
    EnteredNumber = Number.parseInt(EnteredNumber);
    if (RandomNumber > EnteredNumber) {
        // attempts++
        console.log("Entered number is Less then Radom Number");
        console.log("Random Number", RandomNumber);
        console.log("Entered Number", EnteredNumber);
        Game(attempts + 1);
    }
    else if (RandomNumber < EnteredNumber) {
        console.log("Random Number is Greater then Random Number");
        console.log("Random Number", RandomNumber);
        console.log("Entered Number", EnteredNumber);
        Game(attempts + 1);
    } else {
        console.log(`You have Entered the Right Number ${EnteredNumber} and ${RandomNumber}`)
        console.log("Number of Attempts", attempts)

    }

}
Game();
