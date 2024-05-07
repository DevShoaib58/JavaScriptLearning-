// let parent = document.querySelector(".parent")
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML)
// }
// let buttons = document.querySelectorAll("button")
// console.log('buttons: ', buttons);
// let body = document.querySelector("body");
// console.log('body: ', body);
// buttons.forEach(function (button) {
//     button.addEventListener("click", (e) => {
//         console.log('e.target: ', e.target);
//         if (e.target.id === "blue") {
//             console.log(e);
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === "green") {
//             console.log(e);
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })
// BMI Calculator
// Here I Select the whole Form 
// const form = document.querySelector('form');
/*
important note here i use submit event but not the onclick because we are in form and i want to execute the code after i input some values in it
and onclick will run every time when i click the text filed 
the preventDefault will protect the value to be submit on server so it will not process the value thats why we use the preventDefault
i mention or create the value inside the function because i want to process the input values outside the function it will not get the values 
*/   
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const result = document.querySelector('#results');
//   if (height === '' || height < 0 || isNaN(height)) {
//     result.innerHTML = '<h1>Please Enter Valid Value of Height</h1>';
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     result.innerHTML = '<h1>Please Enter Valid Value of Weight</h1>';
//   } else {
//     let BMI = weight / height ** 2;
//     result.innerHTML = `<h1>${BMI}</h1>`;
//   }
// });
//Show Digital Clock
// setIntervel is a Function which is use to run program after a specific time in this case program will run after ever 1 second 
// let clock = document.querySelector('#clock');
// setInterval(function () {
//   let date = new Date();
//   clock.innerHTML = `<h1>${date.toLocaleTimeString()}</h1>`;
//   // console.log(date);
// }, 1000);
