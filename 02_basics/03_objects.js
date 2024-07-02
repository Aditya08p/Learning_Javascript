// singleton = unique, made by constructor
// Object.create

// object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "aditya",
    "full name": "Aditya Patil",
    [mySym]: "mykey1",
    age: 18,
    location: "noida",
    email: "adityakpatil003@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser);

JsUser.email = "aditya.chadgpt.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = "aditya.microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user"); 
} 

console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`); 
} 

console.log(JsUser.greeting2());