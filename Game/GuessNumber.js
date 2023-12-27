let RandomNumber = parseInt(Math.random() * 10);
// console.log(RandomNumber)
// console.log(GuessedNumber)
// console.log(typeof (GuessedNumber))
//This Will Only tell you the Number is Correct or Not
// if (GuessedNumber === RandomNumber) {
//     console.log(`You Have Entered the Right Number your Entered Number is ${GuessedNumber} and Random Number is ${RandomNumber} `)
// } else {
//     console.log(`You Have Entered the Wrong Number your Entered Number is ${GuessedNumber} and Random Number is ${RandomNumber} `)
// }
// }
const Game = () => {
    let GuessedNumber = prompt("Enter Number")
    // while (RandomNumber != GuessedNumber) {
    GuessedNumber = Number.parseInt(GuessedNumber);
    if (RandomNumber > GuessedNumber) {
        console.log("Entered number is Less then Radom Number");
        console.log("Random Number", RandomNumber);
        console.log("Guessed Number", GuessedNumber);
        Game();
    }
    else if (RandomNumber < GuessedNumber) {
        console.log("Random Number is Greater then Random Number");
        console.log("Entered Number", RandomNumber);
        console.log("Guessed Number", GuessedNumber);
        Game();
    } else if (RandomNumber === GuessedNumber) {
        console.log(`You have Entered the Right Number ${GuessedNumber} and ${RandomNumber}`)
    }

}
Game();
