// Referance Link
// https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769
/*******************************************************************************************/
/********                       Array Methods in JS                               *********/
/*******************************************************************************************/
/********                       Array Map Methods in JS                               *********/
// const am = [1, 2, 3, 4, 5, 6];
// let m = am.map((a) => {
//     return result = a * 2
// })
// console.log(m)
/********                       Array Filter Methods in JS                               *********/
// let fa = [2, 4, 8, 6, 20, 54, 44, 13, 16, 11, 55, 11, 71,]
// let result = fa.filter((a) => {
//     if (a % 2 == 0) {
//         console.log("These are even Numbers ", result)
//     } else {
//         console.log("These are odd numbers", result)
//     }
// })
// let array_of_number = [50, 4, 5, 16, 2, 4, 2, 894, 548, 51, 51, 1, 213, 6, 21]
// let result1 = array_of_number.sort()
// console.log('Simple Sorting by JS: ', result1);
// let result = array_of_number.sort((a, b) => {
//     return b - a
// })
// console.log("Sorting by Higher to Lower", result)




// let numbers = [50, 4, 5, 16, 2, 4, 2, 894, 548, 51, 51, 1, 213, 6, 21];
// numbers.sort((a, b) => a - b);

// console.log("Sorting By Lower to Higher", numbers);
// const array = [1, 2, 3, 5, 7, 8, 9, 4, 5, 154, 4, 34, 49, 64]
// let show = array.map((x) => {
//     return (
//         console.log(x)
//         // document.write(<h1>{x}</h1>)
//     )
// })
// const array = [1, 2, 3, 5, 7, 8, 9, 4, 5, 154, 4, 34, 49, 64]

// let number_in = array.push(299999)// add as last element of array
// let number_out = array.pop()//remove last Element of Array
// console.log(array)
// let fa = [2, 4, 8, 6, 20, 54, 44, 13, 16, 11, 55, 11, 71];
// let result = fa.filter((a) => {
//   a % 2 === 0;
// });
// console.log("These are even Numbers ", result);
// const list = [1, 2, 3, 4];
// let result1 = list.filter((el) => el % 2 === 0);
// console.log(result1);


const Companies = ["Bloomberg", "Microsoft", "Uber", "Amazon"];
// Companies.shift()
// Companies.splice(1, 1)
// Companies.splice(1, 1, "Ola")
Companies.push("Facebook");
console.log('Companies: ', Companies);
