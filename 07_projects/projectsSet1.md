# Projects related to DOM

## Project link: 
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html



## project 1
```javascript 
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body')

buttons.forEach( (button) => {
  // console.log(button);
  button.addEventListener('click', function(e) {
    // console.log(e)
    // console.log(e.target)

    switch(e.target.id) {
      case 'grey': body.style.backgroundColor = e.target.id
      break;
      case 'yellow': body.style.backgroundColor = e.target.id
      break;
      case 'white': body.style.backgroundColor = e.target.id
      break;
      case 'blue': body.style.backgroundColor = e.target.id
      break;
      case 'purple': body.style.backgroundColor = e.target.id
      break;
    }
  })
})

```

## project 2
```javascript 
const form = document.querySelector('form')
// console.log(form)

// const height = parseInt(document.querySelector("#height").value) // Empty value

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)

  const results = document.querySelector("#results")

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = "Enter a valid height!"
  }
  else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Enter a valid weight!"
  }
  else {
    const bmi = (weight / (height * height / 10000)).toFixed(2)

    // show the results 
    let report;

    if (bmi < 18.6) {
      report = "Underweight"
    }
    if (18.6 <= bmi  && bmi <= 24.9) {
      report = "Normal Range"
    }
    if (bmi > 24.9) {
      report = "Overweight"
    }
    results.innerHTML = `<span>Your BMI is ${bmi}, which is ${report}</span>`;
  }
})

```

## project 3
```javascript 
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // (func, timeInMilliseconds)


```

## project 4
```javascript 

```