const user = {
    username: "aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }


}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this); // returns empty

// function one(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// one()
// const ch = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const ch = () => {
    let username = "hitesh"
    console.log(this);
}

// ch()\

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)
// const addTwo = (num1,num2) =>  (
//     num1 += 8,
//     num1+num2
// )

const addTwo = (num1,num2) => ({username: "aditya"})

console.log(addTwo(2,1))

const myArray = [1,2,3,4,5]

// myArray.forEach()