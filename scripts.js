let num1 = null;
let num2 = null;
let operator1 = null;
let operator2 = null;
let displayValue = '';

let displayElement = document.querySelector('.display');
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
