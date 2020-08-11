let displayValue = '';
let op = '';
let num1 = '';
let num2 = '';

function sum(a,b) {
    return +a + +b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b == 0) {
        return 'invalid'
    } else {
        return a / b;
    }
}

function operate(op,a,b) {
    switch (op) {
        case '+':
            return sum(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return 'Error';
    }
}

function display() {
    dis = document.getElementById('display');
    dis.innerHTML = displayValue;
}

document.addEventListener('click', function(e) {
    if (e.target.innerHTML === '+') {
        num1 = this.getElementById('display').innerHTML;
        op = '+';
    } else if (e.target.innerHTML === '-') {
        num1 = this.getElementById('display').innerHTML;
        op = '-';
    } else if (e.target.innerHTML === '*') {
        num1 = this.getElementById('display').innerHTML;
        op = '*';
    } else if (e.target.innerHTML === '/') {
        num1 = this.getElementById('display').innerHTML;
        op = '/';
    } else if (!(isNaN(e.target.innerHTML)) && op === '') {
        displayValue += e.target.innerHTML;
        display();
    } else if (!(isNaN(e.target.innerHTML)) && op !== '') {
        displayValue = e.target.innerHTML;
        display();
    } else if (e.target.innerHTML === '=') {
        num2 = this.getElementById('display').innerHTML;
        displayValue = operate(op, num1, num2);
        display();
    } else if (e.target.innerHTML === 'Clear') {
        displayValue = '';
        op = '';
        num1 = '';
        num2 = '';
        display();
    } else if (e.target.innerHTML === 'Delete') {
        displayValue = this.getElementById('display').innerHTML.slice(0,-1);
        display();
    } 
    
    // TODO: Operate on +-*/ keys ie 2+1+3 = 6
    // TODO: Allow decimals.
    // TODO: Allow keyboard inputs
});