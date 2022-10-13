// Four basic math functinos

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//Function to call one of the basic math functions upon a given operator

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            return "Something ain't right.";
    }
}

//Number and decimal buttons to populate display
let displayValue = '';
let firstNum = 0;
let secondNum = 0;
let operator = '';


document.getElementById('0-btn').addEventListener('click', function(){
    displayValue += '0';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('1-btn').addEventListener('click', function(){
    displayValue += '1';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('2-btn').addEventListener('click', function(){
    displayValue += '2';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('3-btn').addEventListener('click', function(){
    displayValue += '3';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('4-btn').addEventListener('click', function(){
    displayValue += '4';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('5-btn').addEventListener('click', function(){
    displayValue += '5';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('6-btn').addEventListener('click', function(){
    displayValue += '6';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('7-btn').addEventListener('click', function(){
    displayValue += '7';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('8-btn').addEventListener('click', function(){
    displayValue += '8';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('9-btn').addEventListener('click', function(){
    displayValue += '9';
    document.getElementById('display').textContent = displayValue;
});

document.getElementById('decimal-btn').addEventListener('click', function(){
    displayValue += '.';
    document.getElementById('display').textContent = displayValue;
});

//All clear button to clear display and empty displayValue

document.getElementById('all-clear-btn').addEventListener('click', function(){
    displayValue = '';
    document.getElementById('display').textContent = displayValue;
});

//Operator buttons to assign firstNum a value and reset the display value
document.getElementById('plus-btn').addEventListener('click', function(){
    operator = '+';   
    firstNum = +displayValue;
    displayValue = '';
});

document.getElementById('subtract-btn').addEventListener('click', function(){
    operator = '-';   
    firstNum = +displayValue;
    displayValue = '';
});

document.getElementById('multiply-btn').addEventListener('click', function(){
    operator = '*';   
    firstNum = +displayValue;
    displayValue = '';
});

document.getElementById('divide-btn').addEventListener('click', function(){
    operator = '/';   
    firstNum = +displayValue;
    displayValue = '';
});
//Equals button to assign secondNum a value and call operate function

document.getElementById('equals-btn').addEventListener('click', function(){
    secondNum = +displayValue;
    displayValue = operate(operator, firstNum, secondNum);
    document.getElementById('display').textContent = displayValue;
});