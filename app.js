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
    }
}

//Essential variables

let displayValue = '';
let firstNum = 0;
let secondNum = 0;
let operator = '';

//Number buttons to populate display

document.getElementById('0-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '0';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('1-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '1';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('2-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '2';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('3-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '3';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('4-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '4';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('5-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '5';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('6-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '6';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('7-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '7';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('8-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '8';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

document.getElementById('9-btn').addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '9';
        document.getElementById('display').textContent = displayValue;
    } else {
        alert("You've reached the number character limit.")
    }
});

//Decimal button, which can only be clicked once before an operator is clicked

let decimalBtn = document.getElementById('decimal-btn');

decimalBtn.addEventListener('click', function(){
    if (displayValue.length < 12) {
        displayValue += '.';
        document.getElementById('display').textContent = displayValue;
        decimalBtn.disabled = true;
    } else {
        alert("You've reached the number character limit.")
    }
});

//Operator buttons to assign firstNum a value and reset the display value
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

//All clear button to clear display and empty variables

function allClear() {
    displayValue = '';
    firstNum = 0;
    secondNum = 0;
    operator = '';
    document.getElementById('display').textContent = displayValue;
    decimalBtn.disabled = false;
}

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
            decimalBtn.disabled = false;
        }
    }
});

// function round(answer) {
//     let decimalIndex = answer.toString().indexOf('.');
//     if ((decimalIndex > -1) && (answer[decimalIndex + 4] !== undefined)) {
//         return answer.parseFloat().toFixed(3);
//     }
// }


function limitDisplay(displayValue) {
    if (displayValue.length > 12) {
        return displayValue.slice(0, 12);
    }
}

//displayValue cannot be more than 12 characters long

// if (displayValue.length > 12) {
//     displayValue = displayValue.substring(0,10);
// }

