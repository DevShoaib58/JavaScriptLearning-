// myfunction();
// const products = product.map((item) => {
//   return item.id;
// });
/*
          // Sync and unique Array Example
          console.log("products: ", products);
          let arr = [10, 20, 30, 30, 30, 40, 50, 60, 70];
          let unique = new Set(arr);
          console.log("unique", unique);
          var arr = [55, 44, 3, 3, 3, 3, 2, 34, 3];
          var unique = [...new Set(arr)];
          console.log("unique: ", unique);
          */
/*
          //Async Example//
          console.log("Start");
          let Fname = "Shoaib ";
          let Lname = "Qureshi";
          let fullName = `${Fname}${Lname}`;
          setTimeout(function () {
            console.log("I will run later");
          }, 5000);
          console.log("END");
          */
/*
         //Filter in JS
          const prices = product.filter((price) => {
            // console.log(price.price);
            if (price.category === "men's clothing") {
              console.table(price.category);
            }
          });
          */
// Find will stop after finding first result like in this example
/*
          const emp = [
            {
              name: "Ram",
              empID: 101,
            },
            {
              name: "Sham",
              empID: 102,
            },
            {
              name: "Mohan",
              empID: 103,
            },
            {
              name: "Mohan",
              empID: 102,
            },
            {
              name: "Mohan",
              empID: 102,
            },
          ];

          const res = emp.find((el) => el.empID === 102);
          console.log("res: ", res);
          */
/* How To Calculate Total Salery of Persons
          const emp = [
           {
             name: "Ram",
             Salery: 100,
           },
           {
             name: "Sham",
             Salery: 200,
           },
           {
             name: "Mohan",
             Salery: 300,
           },
           {
             name: "Aam",
             Salery: 400,
           },
           {
             name: "Naam",
             Salery: 500,
           },
         ];
         const TotalSalery1 = emp.reduce((total, person) => {
           console.log(" person: ", person.name);
           const final = (total += person.Salery);
           // console.log("final: ", final);
           // this will Tell Every Proson Salery
           return total;
         }, 0);
         console.log("TotalSalery1: ", TotalSalery1);
         // const TotalSalery = emp.reduce((total, person) => {
         //   console.log("total: ", total);
         //   console.log("person: ", person.Salery);
         //   total += person.Salery;
         //   return total;
         // }, 0);
         // console.log("TotalSalery: ", TotalSalery);

         */
/*
        //Operator in JS
         let a = 5;
         console.log("a = 5");
         let b = 10;
         console.log("b = 10");
         console.log("c=a+b: ", (c = a + b));
         console.log("c=a-b: ", (c = a - b));
         console.log("c=a*b: ", (c = a * b));
         console.log("c=a/b: ", (c = a / b));
         console.log("c=a**b: ", (c = a ** b));
         console.log("c=a%b: ", (c = a % b));
         console.log("a++ + --b", (c = ++a + b--));
         console.log("b: ", b);
         console.log("a: ", a);
         console.log("a + b", (c = a + b));*/
/*
         // If Else Practice
         let Driver_age = prompt("Enter Your age");
         Driver_age = parseInt(Driver_age);
         console.log("Driver_age: ", typeof Driver_age);
         console.log("Driver_age: ", Driver_age);
         if (Driver_age >= 18) {
           console.log("You are 18+ and eligible to drive");
         } else if (isNaN(Driver_age)) {
           console.log("Please Put 'Integer' Value in Program");
         } else {
           console.log("Yor are Not  Eligible for Driving ");
         }*/

// for (let a = 10; a < 50; a++) {
//   console.log(a);
// }
/*
        let n = prompt("Enter Number of Row"); // number of rows in the diamond

        // printing the upper half of the diamond
        for (let i = 1; i <= n; i++) {
          let str = ""; // string to store the row
          let space = " "; // string to store the spaces

          // adding spaces before the stars
          for (let j = 1; j <= n - i; j++) {
            str += space;
          }

          // adding stars
          for (let k = 0; k < 2 * i - 1; k++) {
            str += "*";
          }

          console.log(str);
        }

        // printing the lower half of the diamond
        for (let i = 1; i <= n - 1; i++) {
          let str = ""; // string to store the row
          let space = " "; // string to store the spaces

          // adding spaces before the stars
          for (let j = 0; j < i; j++) {
            str += space;
          }

          // adding stars
          for (let k = (n - i) * 2 - 1; k > 0; k--) {
            str += "*";
          }

          console.log(str);
        }*/
/*
        let a = 10;
        let b = 30;
        function Average(x, y) {
          return (x + y) / 2;
        }
        console.log("Average of Two Numbers", Average(a, b));
        */
/*
        let marks = {
          Shoaib: 50,
          Talha: 60,
          Shahid: 70,
          Ali: 80,
        };
        for (let i = 0; i < Object.keys(marks).length; i++) {
          console.log(
            "Marks of Students " +
              Object.keys(marks)[i] +
              " are " +
              marks[Object.keys(marks)[i]]
          );
        }*/
/*
        let Number = 10;
        let i;
        while (i != Number) {
          i = prompt("Guess Correct Number");
        }
        console.log("You Have Entered Correct Number"); */
// const mean = (a, b, c, d) => {
//   return (a + b + c + d) / 2;
// };
// console.log(`The Mean is ${mean(5, 6, 7, 8)}`);

// let name = "Shoaib";
// for (i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }
// let name = "Shoaib";
// let Friend = "Bilal";
// console.log(
//   name.concat(" is my name" + " and " + `${Friend}` + " is my Friend")
// );
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const word = "Fox";
// console.log(
//   `The Word ${word} ${
//     sentence.includes(word) ? "is" : "is not"
//   } in the Sentence`
// );
// const Sentence = "HELLO I AM A STRING IN UPPER CASE";
// console.log(
//   Sentence.toLowerCase(),
//   "\nNow im Converted in Lower Case "
// );
//   const word = "You own me 1000";
//   const newWord = word.slice("You own me ".length);
//   console.log(newWord);
//   console.log(typeof newWord);
//   const convertIntoNumber = parseInt(newWord);
//   console.log(convertIntoNumber);
//   console.log(typeof convertIntoNumber);
//   You Cant Edit String
// const arr_marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (let i = 0; i < Object.keys(arr_marks).length; i++) {
//   console.log(
//     `These are keys ${Object.keys(arr_marks)[i]} and these are values ${
//       arr_marks[Object.keys(arr_marks)[i]]
//     }`
//   );
// }
// const sum = arr_marks.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum / arr_marks.length);
// const Office = [
//   { name: "Shoaib", Salery: 10 },
//   { name: "Shahid", Salery: 20 },
//   { name: "Shan", Salery: 30 },
//   { name: "Shahzaib", Salery: 40 },
//   { name: "Sana", Salery: 50 },
//   { name: "Saif", Salery: 60 },
// ];
// const Office = [10, 20, 30, 40, 50, 60];
// const sum_of_Salery = Office.reduce((total, employee) => {
//   return total + employee;
// });
// console.log(sum_of_Salery);
// let random_number = Math.floor(Math.random() * 10);
// var tries = 0;
// let enteredNumber = prompt("Enter number");
// if (random_number == enteredNumber) {
//   console.log("You have Guessed Right Number");
// } else if (random_number < enteredNumber) {
//   console.log("Your guessed Number is Greater then actual number");
// } else if (random_number > enteredNumber) {
//   console.log("Entered number is less then Guessed Number");
// } else if (enteredNumber == "") {
//   console.log("Please Enter Number");
// }
// console.log("Correct value is this", random_number);
// let Sum;
// let a = prompt("Please Type Your Message ");
// a = parseInt(a);
// let b = prompt("Please Type Your Message ");
// b = parseInt(b);
// Sum = a + b;
// document.write(`${Sum}`);
// let ask = prompt("What is Your age");
// ask = Number.parseInt(ask);
// if (ask >= 18) {
//   alert("You can Drive");
// } else {
//   alert("you are not old enough to drive");
// }
// let runAgain = true;
// const age = (asking) => {
//   return asking >= 18 ? true : false;
// };
// while (runAgain) {
//   let asking = prompt("Enter your age");
//   asking = Number.parseInt(asking);
//   if (age(asking)) {
//     // alert("You can Driving");
//     console.log("You can Driving");
//     // location.href = "https://www.google.com/";
//   } else {
//     console.error("You are not eligible for Driving");
//   }

//   runAgain = confirm("Do you Want to Run it Again");
// }
// document.getElementById("main_section").style.color = "red";

// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
// console.log(document.getElementsByTagName("nav")[0].firstElementChild);
// let homeLink = document.querySelector('.nav_link li a');

// // Change the color
// homeLink.style.color = 'red'; //
// let hello = document.querySelector('.nav_link li a');
// let hello = document.getElementsByClassName('.nav_link li a');
// console.log(nav_link);
// hello.style.color = 'red';

// function hello() {
//   let a = 10;
// }
// hello();

// console.log("call a value", a);
// function varScoping() {
//   var x = 1;

//   if (true) {
//     var x = 2;
//     console.log(x); // will print 2
//   }

//   console.log(x); // will print 2
// }

// function letScoping() {
//   let x = 1;

//   if (true) {
//     let x = 2;
//     console.log(x); // will print 2
//   }

//   console.log(x); // will print 1
// }
// let a = 10;
// let b = 5;
// let c = 10;
// let d = 10;
// console.log("a =", a);
// console.log("b =", b);
// console.log("a+b:", a + b);
// console.log("a-b:", a - b);
// console.log("a*b:", a * b);
// console.log("a/b:", a * b);
// console.log("b++:", b++);
// console.log("b:", b);
// console.log("++d:", ++d);
// console.log("--c:", --c);
// console.log("a--:", a--);
// console.log("a:", a);
/*******************Q10 Input a Number and Check is it Multilple of 5 or not in JS *******************/
// let number = prompt("Enter your Number");
// number = parseInt(number);
// console.log(typeof number);
// if (number >= 80 && number <= 100) {
//   console.log("You Got A Grade and Your Marks = ", number);
// } else if (number >= 70 && number <= 79) {
//   console.log("You Got B Grade and Your Marks = ", number);
// } else if (number >= 60 && number <= 69) {
//   console.log("You Got C Grade and Your Marks = ", number);
// } else if (number >= 50 && number <= 59) {
//   console.log("You Got D Grade and Your Marks = ", number);
// } else if (number >= 0 && number <= 49) {
//   console.log("You Got F Grade and Your Marks = ", number);
// }

/*******************Q10 For Loop in JS *******************/
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log("Loop has Ended");

/*******************Q10 Calculate the sum of 1 to 10 JS *******************/
// let sum = 0;
// for (i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);
/*******************Q10 Guess the Number game in JS *******************/
// generate a secret number between 1 and 10
// const MIN = 1;
// const MAX = 10;

// let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
// console.log(secretNumber);
// let guesses = 0; // for storing the number of guesses
// let hint = ""; // for storing hint
// let number = 0;
// do {
//   // get input from user
//   let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

//   // get the integer
//   number = parseInt(input);

//   // increase the number of guesses
//   guesses++;

//   // check input number with the secret number provide hint if needed
//   if (number > secretNumber) {
//     hint = ", and less than " + number;
//   } else if (number < secretNumber) {
//     hint = ", and greater than " + number;
//   } else if (number == secretNumber) {
//     alert(`Bravo! you're correct after ${guesses} guess(es).`);
//   }
// } while (number != secretNumber);

// /*******************Q10 Prints all Even Number From 0 to 100 in JS *******************/
// for (let number = 0; number <= 100; number++) {
//   // console.log("Number =", number);
//   if (number % 2 == 0) {
//     console.log("List of Even Number =", number);
//   }
//   // else console.log("List of odd Number =", number);
// }
// In Order to work on DOM .I'll work on script.js
// let heading = document.getElementById('year')
// console.log('heading: ', heading);
// let my_head = document.getElementsByClassName("heading")
// console.dir('my_head: ', my_head);
// console.log('my_head: ', my_head);
// let mytag = document.getElementsByTagName('h1')[0].innerHTML;
// console.log('mytag i am Log : ', mytag);
// console.dir('mytag i am Dir: ', mytag);

// let mytag = document.getElementsByTagName('h1');
// console.log('mytag i am Log : ', mytag);
// console.dir('mytag i am Dir: ', mytag);
// console.error('mytag i am Dir: ');
// console.warn('mytag i am Dir: ');
// console.info('mytag i am Dir: ');
// console.table('mytag i am Dir: ', mytag);
// console.time('mytag i am Dir: ', mytag);
// let query = document.querySelector("h1")
// console.dir('query: ', query);
// console.log('query: ', query);
// let query1 = document.querySelector(".heading")
// console.log('query1: ', query1);
// let query2 = document.querySelector("#year")
// console.log('query2: ', query2);
// let new1 = document.querySelector(".hello").firstChild
// console.log('new: ', new1);