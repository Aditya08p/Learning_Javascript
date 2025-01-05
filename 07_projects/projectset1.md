# Projects related to DOM
## Solutions
### Project 1 solution
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

### Project 2 solution
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
### Project 3 Solution
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```
### Project 4 solution code
```javascript

let RandomNumber = parseInt(Math.random()*100 + 1) 

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1
let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess<1){
    alert('Please enter a number greater than 1')
  } else if(guess>100){
    alert('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if(numGuesses===11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${RandomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess=== RandomNumber){
    displayMessage(`You Guessed it Right!!`)
    endGame()
  } else if (guess<RandomNumber){
    displayMessage(`Number is Too Low`)

  } else if (guess>RandomNumber){
    displayMessage(`Number is Too High`)

  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuesses++;
  remaining.innerHTML = `${11-numGuesses}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id= "newGame">Start New Game</h2>`
  startOver.appendChild(p)
  newGame();
  playGame=false
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    RandomNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    numGuesses = 1
    guessSlot.innerHTML= ''
    remaining.innerHTML = `${11-numGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
```

### Project 5 solution code
```javascript

const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class = 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </table>
    </div>
  `;
});

```

### Project 6 solution code
```javascript

// generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
let intervalID = null;
const startChangingColor = function () {
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!intervalID) {
    intervalID = setInterval(changeBgColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```



