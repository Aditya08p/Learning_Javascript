# Projects related to DOM
## Solutions
### Project 1
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( (btn) => {
  // console.log(btn);
  btn.addEventListener('click', (e) => {
    // console.log(e)
    // console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
});
```

## Project 2 solution
```javascript
const form = document.querySelector('form')
//this usecase will give empty value
const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  
  if(height === '' || height<=0 || isNaN(height) ){
    results.innerHTML = `Please give a valid height ${height}`;
  } else if(weight === '' || weight<=0 || isNaN(weight) ){
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    if(bmi<=18.6){
      results.innerHTML = `<span>BMI = ${bmi}</span><br><span>You're Under Weight</span>`;
    } else if(bmi>18.6 || bmi<=24.9){
      results.innerHTML = `<span>BMI = ${bmi}</span><br><span>Your Weight is Normal</span>`;
    }
    if(bmi>24.9){
      results.innerHTML = `<span>BMI = ${bmi}</span><br><span>You're Over Weight</span>`;
    }
  }
})
```