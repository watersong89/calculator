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