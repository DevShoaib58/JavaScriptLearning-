/************* Q1 Date and Time  in JS? **************/
let today = new Date()
console.log('today: ', today);
let year = today.getFullYear()
let month = today.getMonth()
let Hour = today.getHours()
let time = today.getHours()
document.getElementById("year").innerHTML = "Year :" + year;
document.getElementById("month").innerHTML = "Month :" + month;
document.getElementById("hour").innerHTML = "Hour :" + Hour;