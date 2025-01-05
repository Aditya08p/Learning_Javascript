// generate random color 
const hexcode = "0123456789ABCDEF"
function randomColor(){
    let color= "#";
    for(let i=0;i<6;i++){
        color+=hexcode[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(randomColor())
let intervalID = null;
function startChangingColor(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalID){
        intervalID = setInterval(changeBgColor,1000)
    }
    
}

const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID=null;
}

document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)

