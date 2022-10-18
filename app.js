//Variables

let displayValue = '';
let firstNum = 0;
let secondNum = 0;
let operator = '';

//Round to three decimal places if applicable (added to operate function)

function round(answer) {
    if (answer.toString().includes('.')) {
        return parseFloat(answer.toFixed(3));
    } else {
        return answer;
    }
}

//Function to call one of the basic math functions upon a given operator

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return round(x + y);
        case '-':
            return round(x - y);
        case '*':
            return round(x * y);
        case '/':
            return round(x / y);
    }
}

//All clear button to clear display and empty variables

function allClear() {
    displayValue = '';
    firstNum = 0;
    secondNum = 0;
    operator = '';
    document.getElementById('display').textContent = displayValue;
    decimalBtn.disabled = false;
}

//Number buttons append their number to the current displayValue

const numberBtns = document.querySelectorAll('.number-btn');
const decimalBtn = document.getElementById('decimal-btn');

numberBtns.forEach(button => {
    button.addEventListener('click', function() {
        if (displayValue.length < 12) {
            displayValue += button.textContent;
            if (displayValue.includes('.')) { decimalBtn.disabled = true };
            document.getElementById('display').textContent = displayValue;
        } else if (displayValue.length > 12) {
            alert("You've reached the number character limit.");
        }
    });
});

//Operator buttons to assign firstNum a value and reset the display value

document.getElementById('divide-btn').addEventListener('click', function(){
    if (operator !== '') {
        secondNum = +displayValue;
        displayValue = operate(operator, firstNum, secondNum);
        document.getElementById('display').textContent = displayValue;
    }
    operator = '/';   
    firstNum = +displayValue;
    displayValue = '';
    decimalBtn.disabled = false;
});

document.getElementById('multiply-btn').addEventListener('click', function(){
    if (operator !== '') {
        secondNum = +displayValue;
        displayValue = operate(operator, firstNum, secondNum);
        document.getElementById('display').textContent = displayValue;
    }
    operator = '*';   
    firstNum = +displayValue;
    displayValue = '';
    decimalBtn.disabled = false;
});

document.getElementById('subtract-btn').addEventListener('click', function(){
    if (operator !== '') {
        secondNum = +displayValue;
        displayValue = operate(operator, firstNum, secondNum);
        document.getElementById('display').textContent = displayValue;
    }
    operator = '-';  
    firstNum = +displayValue;
    displayValue = '';
    decimalBtn.disabled = false;
});

document.getElementById('plus-btn').addEventListener('click', function(){
    if (operator !== '') {
        secondNum = +displayValue;
        displayValue = operate(operator, firstNum, secondNum);
        document.getElementById('display').textContent = displayValue;
    }
    operator = '+';   
    firstNum = +displayValue;
    displayValue = '';
    decimalBtn.disabled = false;
});

document.getElementById('all-clear-btn').addEventListener('click', function() {
    allClear();
});

//Backspace buttton to delete last character in display value

document.getElementById('backspace-btn').addEventListener('click', function(){
    if (displayValue[displayValue.length - 1] === '.') { decimalBtn.disabled = false; }
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').textContent = displayValue;
});

//Equals button to assign secondNum a value and call operate function

document.getElementById('equals-btn').addEventListener('click', function(){
    if (operator !== '') {
        secondNum = +displayValue;
        if ((operator === '/') && (secondNum === 0)) {
            alert("You can't divide by zero!");
            allClear();
        } else {
            displayValue = operate(operator, firstNum, secondNum);
            document.getElementById('display').textContent = displayValue;
            displayValue = displayValue.toString();
            displayValue.includes('.') ? decimalBtn.disabled = true : decimalBtn.disabled = false;
            operator = '';
        }
    }
});
