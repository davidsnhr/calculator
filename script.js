let fullOperation = '';
let result = '';
let prevCalcultation = [];

function pressButton(number) {
  console.log('hello world' + number);
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation
    .toString()
    .split(/(\+|-|\x|\/)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\/)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\^|\/)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case 'x':
      fullOperation = multiplication(number1, number2);
      break;
    case '-':
      fullOperation = substract(number1, number2);
      break;
    case '+':
      fullOperation = addition(number1, number2);
      break;
    case '/':
      fullOperation = division(number1, number2);
      break;
    case '^':
      fullOperation = pow(number1, number2);
      break;
    default:
      break;
  }
  showNumber();
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function substract(number1, number2) {
  return number1 - number2;
}

function addition(number1, number2) {
  return number1 + number2;
}

function division(number1, number2) {
  return number1 - number2;
}

function pow(number1, number2) {
  return Math.pow(number1, number2);
}

function clearOperation() {
  console.log('clear');
  if (fullOperation !== '') {
    prevCalcultation.push(fullOperation);
  }
  fullOperation = '';
  console.log(prevCalcultation);

  showNumber();

  prevResults();
}

function prevResults() {
  const container = document.getElementById('data-container');
  container.innerHTML = prevCalcultation.map((value) => {
    return '<div>' + value + '<div>';
  }).join('');
}

function showNumber() {
  document.getElementById('operand1Display').innerHTML = fullOperation;
}

showNumber();
