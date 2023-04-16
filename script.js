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


let num1 = '';
let operator = '';
let num2 = '';
let result = 0; 

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return result = add(Number(num1), Number(num2));
    case '-':
      return result = subtract(Number(num1), Number(num2));
    case '*':
      return result =  multiply(Number(num1), Number(num2));
    case '/':
      return result = divide(Number(num1), Number(num2));
    default:
      throw new Error('Invalid operator');
  }
}

const digitBtn = document.querySelectorAll('.digit');
digitBtn.forEach(digit => {
  digit.addEventListener('click', () => {
    if (num2 === '' && operator ==='') {
      num1 += digit.textContent;
      display.textContent = num1;
    } else {
      num2 += digit.textContent;
      display.textContent = num2;
    }
  });
});



const operatorsBtn = document.querySelectorAll('.operator');
operatorsBtn.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', () =>{
    if (!(operator ==='')){
    display.textContent = operate(operator, num1, num2);
    operator = operatorBtn.textContent
    num1 =  result
    result = 0
    num2 = '';
    }else{
      operator = operatorBtn.textContent
    }
  });
});



const display = document.querySelector('#display');

function showOnDisplay(clickedBtnText) {
  display.textContent = clickedBtnText;
};



const equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', () => {
  if (num1 !== '' && num2 !== '' && operator !== '') {
    display.textContent = operate(operator, num1, num2);
    num1 = result;
    result = 0;
    operator = '';
    num2 = '';
  }
});



const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  num1 = '';
  operator = '';
  num2 = '';
  result = 0
  display.textContent = '0';
});
