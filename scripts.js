let num1 = null;
let num2 = '';
let operator = null;
let displayValue = '0';
let calculated = false;

let displayElement = document.querySelector('.display');
let numButtons = document.querySelectorAll('.js-number-button');
let operatorButtons = document.querySelectorAll('.js-operator-button');
let equalsButton = document.querySelector('.js-equals-button');
let clearButton = document.querySelector('.js-clear-button');
let pointButton = document.querySelector('.js-point-button');

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

equalsButton.addEventListener('click', () => {
  clickEquals();
  updateDisplay();
})

clearButton.addEventListener('click', () => {
  clearCalculator();
  updateDisplay();
})

pointButton.addEventListener('click', () => {
  addPoint(pointButton.value);
  updateDisplay();
})

function addNumber(input) {
  if (displayValue === 0 || displayValue === '0' || calculated === true) {
    displayValue = input;
    calculated = false;
  } else if (num1 === null) {
    displayValue += input;
  } else if (num1 !== null) {
    num2 += input;
    displayValue = `${num1} ${operator} ${num2}`
  }
}

function addPoint(input) {
  if (displayValue.includes('.')) {
    return
  } else addNumber(input);
}

function addOperator(input) {
  if (operator === null) {
    num1 = displayValue;
    operator = input;
    displayValue = `${num1} ${input}`;
  } else if (operator !== null) {
    if (`${operate(num1, operator, num2)}` === 'snark') {
      displayValue = 'Nice try muthafucka!';
      num1 = null;
      num2 = '';
      operator = null;
      calculated = true;
    } else if (hasDecimal(`${operate(num1, operator, num2)}`) === true) {
      displayValue = roundToX(`${operate(num1, operator, num2)}`, 8);
      num1 = displayValue;
      num2 = '';
      operator = input;
    } else {
      displayValue = `${operate(num1, operator, num2)}`;
      num1 = displayValue;
      num2 = '';
      operator = input;
    }
  }
}

function updateDisplay() {
  displayElement.textContent = displayValue;
}

function clickEquals() {
  if (num2 === '') {
    return;
  } else {
    if (`${operate(num1, operator, num2)}` === 'snark') {
      displayValue = 'Nice try muthafucka!';
      num1 = null;
      num2 = null;
      operator = null;
      calculated = true;
    } else if (hasDecimal(`${operate(num1, operator, num2)}`) === true) {
      displayValue = roundToX(`${operate(num1, operator, num2)}`, 8);
    } else {
      displayValue = `${operate(num1, operator, num2)}`;
    }
    num1 = null;
    num2 = '';
    operator = null;
    calculated = true;
  }
}

function clearCalculator() {
  num1 = null;
  num2 = '';
  operator = null;
  displayValue = '0';
  calculated = false;
}

function operate(num1, operator, num2) {
  if (operator === '+') {
    return Number(num1) + Number(num2);
  } if (operator === '-') {
    return Number(num1) - Number(num2);
  } if (operator === '*') {
    return Number(num1) * Number(num2);
  } if (operator === '/') {
    if (num2 === 0 || num2 === '0') {
      return 'snark'
    } else {
      return Number(num1) / Number(num2);
    }
  }
}

function hasDecimal(n) {
  let result = (n - Math.floor(n)) !== 0;
  if (result) return true;
  else return false;
}

function roundToX(num, decimals) {
  const multiplier = Math.pow(10, decimals);
  return Math.round(num * multiplier) / multiplier;
}