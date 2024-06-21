// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123') 
//  console.log(id==anotherId);
const bigNumber = 813738913n

// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","nagaraj","doga"]

let myObj = {
    name:"aditya",
    age:20,
}

const myFunction = function(){
    console.log("hello world");
}
//  console.log(typeof myFunction); // type is function but it is object function
// console.log(typeof anotherId);


// ***********************************************************


// Stack Memory (Primitive) , Heap (Non- Primitive)


let myYoutubeName = "adityapatil.com"
let anotherName = myYoutubeName
anotherName = "chai aur code"
// console.log(myYoutubeName);
// console.log(anotherName);
let userOne = {
    email: "user@google.com",
    upi: "user@paytm"
}
let userTwo = userOne
userTwo.email = "adityakpatil@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);