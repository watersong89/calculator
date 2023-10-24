let num1 = null;
let num2 = null;
let operator = null;
let displayValue = '';
let runningTotalValue = '';

let displayElement = document.querySelector('.display');
let runningTotalElement = document.querySelector('.running-total');
let numButtons = document.querySelectorAll('.js-number-button');
let operatorButtons = document.querySelectorAll('.js-operator-button');
let equalsButton = document.querySelector('.js-equals-button');
let clearButton = document.querySelector('.js-clear-button');

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  if (operator === '+') {
    return add(num1, num2);
  } if (operator === '-') {
    return subtract(num1, num2);
  } if (operator === '*') {
    return multiply(num1, num2);
  } if (operator === '/') {
    return divide(num1, num2);
  }
}

function updateDisplay() {
  displayElement.textContent = displayValue;
}

function clearCalculator() {
  num1 = null;
  num2 = null;
  operator = null;
  displayValue = '';
  updateDisplay();
}

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    displayValue += button.value;
    updateDisplay();
  })
})

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    displayValue += ` ${button.value} `
    updateDisplay();
  })
})

equalsButton.addEventListener('click', () => {
  let operationArray = displayValue.split(" ")
  num1 = operationArray[0];
  operator = operationArray[1];
  num2 = operationArray[2];
  let result = operate(num1, operator, num2);
  displayElement.textContent = result;
})

clearButton.addEventListener('click', () => {
  clearCalculator();
})