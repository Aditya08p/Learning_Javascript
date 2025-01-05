const body = document.body
const buttons = document.querySelectorAll('.button')
// console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.id==='dark'){
            body.style.backgroundColor = 'black'
            body.style.color = 'white'
            buttons.forEach((btn) => {
                btn.style.border = 'solid white'
            });
        } else{
            body.style.backgroundColor = event.target.id
            body.style.color = 'black'
            buttons.forEach((btn) => {
                btn.style.border = 'solid black'
            });
        }
    })
})