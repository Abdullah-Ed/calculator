function add(a,b) {
  return a +b
};


function subtract(a,b) {
  return a - b
};


function multiply(a,b) {
  return a * b
}


function divide(a,b) {
  return a / b
} 


const num1 = 3;
const operator = '+';
const num2 = 5;


function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return 'Invalid operator';
  }
}



const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click',showOnDisplay)
});

const display = document.querySelector('#display');

function showOnDisplay(event){
  display.textContent = event.target.textContent;
  if (event.target.textContent === 'C'){
    return display.textContent = '';
  }
};

let currentDisplay = display.textContent;
