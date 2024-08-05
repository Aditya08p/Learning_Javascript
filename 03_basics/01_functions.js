
function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayMyName()

function addTwoNum(number1 ,number2){
    // console.log(number1 + number2);
    
    // let result = number1 + number2
    // return result

    return number1+number2
}
const result = addTwoNum(2, 3)
// console.log("result:" , result);

function loginusermsg(username ="sam"){ // overrided when given value, otherwise gives default value
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginusermsg("aditya patil"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,3000))
const user = {
    username: "aditya",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArr = [200,400,600,800]
function returnSecondVal(getarray){
    return getarray[1]
}

console.log(returnSecondVal(myNewArr));

console.log(returnSecondVal([2000,300,550,662,562,672]))