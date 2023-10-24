let num1 = null;
let num2 = '';
let operator = null;
let displayValue = '0';

let displayElement = document.querySelector('.display');
let numButtons = document.querySelectorAll('.js-number-button');
let operatorButtons = document.querySelectorAll('.js-operator-button');
let equalsButton = document.querySelector('.js-equals-button');
let clearButton = document.querySelector('.js-clear-button');

updateDisplay();


numButtons.forEach(button => {
  button.addEventListener('click', () => {
    addNumber(button.value);
    updateDisplay();
  })
})

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    addOperator(button.value);
    updateDisplay();
  })
})

function addNumber(input) {
  if (displayValue === 0 || displayValue === '0') {
    displayValue = input;
  } else if (num1 === null) {
    displayValue += input;
  } else if (num1 !== null) {
    num2 += input;
    displayValue = `${num1} ${operator} ${num2}`
  }
}

function addOperator(input) {
  if (operator === null) {
    num1 = displayValue;
    operator = input;
    displayValue = `${num1} ${input}`;
  } else if (operator !== null) {
    displayValue = `${operate(num1, operator, num2)}`;
    num1 = displayValue;
    num2 = '';
    operator = input;
  }
}

function updateDisplay() {
  displayElement.textContent = displayValue;
}

function clickEquals() {

}

function operate(num1, operator, num2) {
  if (operator === '+') {
    return Number(num1) + Number(num2);
  } if (operator === '-') {
    return Number(num1) - Number(num2);
  } if (operator === '*') {
    return Number(num1) * Number(num2);
  } if (operator === '/') {
    return Number(num1) / Number(num2);
  }
}