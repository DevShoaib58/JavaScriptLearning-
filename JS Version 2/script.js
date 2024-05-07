// Stack and Heap in JavaScript ?
// All Primitive Data Types are in Stack and Other are in Non Primitive Data type here is the Example

/*
let name1 = "Shoaib"
let Fname = name1;
Fname = "Shoaib Qureshi"
console.log(name1);
console.log(Fname);
*/

// This Shows That the in Stack only reference is shared not actual value  this why name1 is still Shoaib

/*
let user1 = {
    name: "Shoaib",
    email: "devshoaib585@gmail.com"
}
let user2 = user1;
console.log(user1);
user2.email = "shoaib@email.com"
console.log(user1.email);
console.log(user2.email);
*/

// So in this case complete value is changed


// Object in JS


/*
const mySym = Symbol("kay1")
let data = {
    name: 'Shoaib',
    Age: 26,
    [mySym]: "hello",
    email: 'Shoaib@email.com',
    'FullName': "Shoaib Qureshi"
}
console.log(data[mySym]);
console.log(data["FullName"]);
console.log(data["name"]);
*/



// This is a way to get a value from Obkject But not Recomaended Specially last case of value
// console.log(data.name);
// So try this


// this method is useful in last cse because we cannot simply call it like other so we use this 
