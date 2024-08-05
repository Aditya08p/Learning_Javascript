
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
console.log(loginusermsg("aditya patil"))
