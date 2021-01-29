const input = document.getElementById('input');
const answer = document.getElementById('answer');

function getNumber(num) {
  switch (num) {
    case 1:
      input.value += '1';
      break;
    case 1:
      input.value += '1';
      break;
    case 2:
      input.value += '2';
      break;
    case 3:
      input.value += '3';
      break;
    case 4:
      input.value += '4';
      break;
    case 5:
      input.value += '5';
      break;
    case 6:
      input.value += '6';
      break;
    case 7:
      input.value += '7';
      break;
    case 8:
      input.value += '8';
      break;
    case 9:
      input.value += '9';
      break;
    case 0:
      input.value += '0';
      break;
  }
}

// mathematical operators
function getOperator(operator) {
  switch (operator) {
    case '+':
      input.value += '+';
      break;
    case '-':
      input.value += '-';
      break;
    case '*':
      input.value += '*';
      break;
    case '/':
      input.value += '/';
      break;
    case '.':
      input.value += '.';
      break;
  }
}

function comparison() {
  let output = +eval(input.value);
  answer.value = output;
}

let bracket = 0;
function brackets() {
  if (bracket === 0) {
    input.value += '(';
    bracket = 1;
  } else if (bracket === 1) {
    input.value += ')';
    bracket = 0;
  }
}

function backspace() {
  let inputValue = input.value;
  if (inputValue.length > 0) {
    inputValue = inputValue.substring(0, inputValue.length - 1);
    input.value = inputValue;
  }
}

// clear input and output
function clearInput() {
  input.value = '';
  answer.value = '';
}
