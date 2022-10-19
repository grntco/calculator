//VARIABLES

//Values
let displayValue = '';
let firstNum = 0;
let secondNum = 0;
let operator = '';

//Buttons
const numberBtns = document.querySelectorAll('.number-btn');
const decimalBtn = document.getElementById('decimal-btn');
const operatorBtns = document.querySelectorAll('.operator');
const backspaceBtn = document.getElementById('backspace-btn');
const allClearBtn = document.getElementById('all-clear-btn');
const equalsBtn = document.getElementById('equals-btn');

//FUNCTIONS

//Rounds to three decimal places if applicable
function round(answer) {
    if (answer.toString().includes('.')) {
        return parseFloat(answer.toFixed(3));
    } else {
        return answer;
    }
}

//Performs a math operation based on a given operator
function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return round(x + y);
        case '—':
            return round(x - y);
        case '×':
            return round(x * y);
        case '÷':
            return round(x / y);
    }
}

//Empties values, clears display, and re-enables decimal button
function allClear() {
    displayValue = '';
    firstNum = 0;
    secondNum = 0;
    operator = '';
    document.getElementById('display').textContent = displayValue;
    decimalBtn.disabled = false;
}

//BUTTON EVENT LISTENERS

//Number buttons append their number to the current displayValue
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

//Operator buttons assign firstNum, operator, reset the display value, and re-enable decimal button
operatorBtns.forEach(button => {
    button.addEventListener('click', function() {
        if (operator !== '') {
            secondNum = +displayValue;
            displayValue = operate(operator, firstNum, secondNum);
            document.getElementById('display').textContent = displayValue;
        }
        operator = button.textContent;   
        firstNum = +displayValue;
        displayValue = '';
        decimalBtn.disabled = false;
    });
});

//AC button calls allClear function
allClearBtn.addEventListener('click', function() {
    allClear();
});

//Backspace buttton deletes the last character in the display
backspaceBtn.addEventListener('click', function(){
    if (displayValue[displayValue.length - 1] === '.') { decimalBtn.disabled = false; }
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').textContent = displayValue;
});

//Equals button assigns secondNum a value and calls operate function
equalsBtn.addEventListener('click', function(){
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


//Keyboard support

// document.addEventListener('keydown', function(e) {
//     if (e.key >= 0 && e.key <= 9) {console.log(e.key)};
// });