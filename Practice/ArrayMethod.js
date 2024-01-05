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
let fa = [2, 4, 8, 6, 20, 54, 44, 13, 16, 11, 55, 11, 71,]
let result = fa.filter((a) => {
    if (a % 2 == 0) {
        console.log("These are even Numbers ", result)
    } else {
        console.log("These are odd numbers", result)
    }
})