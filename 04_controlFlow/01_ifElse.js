//  If


// const temp = 43
// const isUserLoggedIn = true
// if(temp===41){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("executed");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score>100) {
//     const power ="fly"
//     console.log(`user power: ${power}`);
// }


// const balance = 1000
// // if(balance> 500) console.log("test") , console.log("test2") //wrong way, never use this

// if (balance<500) {
//     console.log("less than 500");
// } else if (balance<750){
//     console.log("less than 750");
// } else if (balance<900) {  
//     console.log("less than 900");    
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedinfromgoogle =false
const loggedinfromemail =true

if (userLoggedIn && debitCard || false) {
    console.log("allow to buy courses");
    
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}