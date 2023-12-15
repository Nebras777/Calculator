let input1 = ''
let input2 = ''
let operator = ''

const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const deleter = document.getElementById('delete')
const clearer = document.getElementById('clear')
const equals = document.getElementById('equals')
const topInput = document.getElementById('past-input')
const bottomInput = document.getElementById('current-input')

function addNumber(number) {
    if (bottomInput.textContent === '0') {
        resetInput()
    }
    bottomInput.textContent += number
}

function setOperator(operation) {
    input1 = bottomInput.textContent
    operator = operation
    topInput.textContent = `${operator} ${input1}`
    bottomInput.textContent = '0'
}

function evaluate() {
    input2 = bottomInput.textContent
    topInput.textContent = `= ${input2} ${operator} ${input1}`
    bottomInput.textContent = operate()
}

function resetInput() {
    bottomInput.textContent = null
}

function operate() {
    switch (operator) {
        case "+":
            return (+input1 + +input2).toString()
            break;
        case "-":
            return (+input1 - +input2).toString()
            break;
        case "×":
            return (+input1 * +input2).toString()
            break;
        case "÷":
            return (+input1 / +input2).toString()
            break;
    }
}

numberButtons.forEach((button) =>
    button.addEventListener('click', () => addNumber(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
)

equals.addEventListener('click', evaluate)
