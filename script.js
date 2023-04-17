function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function round(number) {
  return Math.round(number * 100) / 100;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return round(add(Number(num1), Number(num2)));
    case '-':
      return round(subtract(Number(num1), Number(num2)));
    case '*':
      return round(multiply(Number(num1), Number(num2)));
    case '/':
      if (num2 ==='0'){
        updateDisplay('Error');
        return;
      } else {
        return round(divide(Number(num1), Number(num2)));
      }
    default:
      throw new Error('Invalid operator');
  }
}

let num1 = '';
let operator = '';
let num2 = '';
let result = 0; 


const display = document.querySelector('#display');
function updateDisplay(value) {
  display.textContent = value;
}

function clear() {
  num1 = '';
  operator = '';
  num2 = '';
  result = 0;
  updateDisplay(0);
}

function deleteLastDigit() {
  if (num2 === '' && operator === '') {
    num1 = num1.slice(0, -1);
    updateDisplay(num1 === '' ? 0 : num1);
  } else {
    num2 = num2.slice(0, -1);
    updateDisplay(num2 === '' ? 0 : num2);
  }
}

function addDigit(digit) {
  if (num2 === '' && operator === '') {
    num1 += digit;
    updateDisplay(num1);
  } else {
    num2 += digit;
    updateDisplay(num2);
  }
}

function addDecimalPoint() {
  if (num2 === '') {
    if (num1.includes('.')) {
      return;
    } else {
      num1 += '.';
      updateDisplay(num1);
    }
  } else {
    if (num2.includes('.')) {
      return;
    } else {
      num2 += '.';
      updateDisplay(num2);
    }
  }
}

function calculateResult() {
  if (num1 !== '' && num2 !== '' && operator !== '') {
    result = operate(operator, num1, num2);
    num1 = result.toString();
    operator = '';
    num2 = '';
    updateDisplay(result);
    return result;
  } else {
    return;
  }
}



const digitBtns = document.querySelectorAll('.digit');
digitBtns.forEach(digitBtn => {
  digitBtn.addEventListener('click', () => addDigit(digitBtn.textContent));
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', () => {
    if (!(operator ==='')){
      calculateResult();
    }
    operator = operatorBtn.textContent;
  });
});

const equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', () => {
  calculateResult();
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  clear();
});

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
  addDecimalPoint();
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
  deleteLastDigit();
});

document.addEventListener('keydown', (event) => {
  const key = event.key;
  
  // Check if the key pressed is a digit
  if (/^[0-9]$/.test(key)) {
    // Call the digit button click event
    const digitBtn = document.querySelector(`button[data-key="${key}"]`);
    if (digitBtn) {
      digitBtn.click();
    }
  }
  
  // Check if the key pressed is an operator
  if (/^[\+\-\*\/]$/.test(key)) {
    // Call the operator button click event
    const operatorBtn = document.querySelector(`button[data-key="${key}"]`);
    if (operatorBtn) {
      operatorBtn.click();
    }
  }
  
  if (key === '.') {
      decimalBtn.click();
  }
  
  if (key === 'Enter') {
      equalBtn.click();
  }

  if (key === 'Backspace') {
      deleteBtn.click();
  }
  
  if (key === 'Escape') {
      clearBtn.click();
  }
});