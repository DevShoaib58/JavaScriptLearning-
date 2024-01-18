let UserInput = prompt("Enter you in put in capital letters Rock(R) ,Paper(P) ,Scissors(S)")
let ComputerInput = parseInt(Math.random() * 3)
console.log(ComputerInput)
let ComputerInputSet = ["R", "P", "S"]
let ComputerChoice = ComputerInputSet[ComputerInput]
console.log('ComputerChoice: ', ComputerChoice);

const match = (ComputerInput, UserInput) => {
    // if (ComputerInput === UserInput) {
    //     console.log("Match is Tie")
    // } else if (ComputerInput === "R" && UserInput === "P") {
    //     console.log("User Wins")
    // } else if (ComputerInput === "P" && UserInput === "R") {
    //     console.log("Computer Won")
    // } else if (ComputerInput === "S" && UserInput === "R") {
    //     console.log("User Wins")
    // } else if (ComputerInput === "S" && UserInput === "P") {
    //     console.log("Computer Wins")
    // } else if (ComputerInput === "R" && UserInput === "S") {
    //     console.log("Computer Wins")
    // } else if (ComputerInput === "P" && UserInput === "S") {
    //     console.log("User Wins")
    // }

    if (ComputerChoice === UserInput) {
        console.log("Its a Tie");
    } else if (
        (ComputerInput === "R" && UserInput === "P")
        || (ComputerChoice === "P" && UserInput === "S")
        || (ComputerChoice === "S" && UserInput === "R")
    ) {
        console.log("You Win");
    } else {
        console.log("You loose");
    }


}
match(ComputerChoice, UserInput)