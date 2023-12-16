let input1 = ''
let input2 = ''
let operator = ''
let resetVariable = false

const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const deleter = document.getElementById('delete')
const clearer = document.getElementById('clear')
const equals = document.getElementById('equals')
const topInput = document.getElementById('past-input')
const bottomInput = document.getElementById('current-input')

function addNumber(number) {
    if (bottomInput.textContent === '0' || resetVariable) resetInput()
    else if (bottomInput.textContent.length >= 15) {
        alert("Maximum 15 digits")
        return number
    }
    bottomInput.textContent += number
}

function setOperator(operation) {
    if (operator !== '') evaluate()
    input1 = bottomInput.textContent
    operator = operation
    topInput.textContent = `${input1} ${operator}`
    resetVariable = true
}

function evaluate() {
    if (operator === '' || resetVariable) return
    input2 = bottomInput.textContent
    topInput.textContent = `${input1} ${operator} ${input2} =`
    bottomInput.textContent = operate()
    operator = ''
}

function resetInput() {
    bottomInput.textContent = null
    resetVariable = false
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
        case "^":
            return (Number(input1) ** +input2).toString()
            break;
    }
}

function clear() {
    input1 = ''
    input2 = ''
    operator = ''
    resetVariable = false
    topInput.textContent = ''
    bottomInput.textContent = '0'
}

function deleteInput() {
    bottomInput.textContent = bottomInput.textContent.slice(0, -1)
}

numberButtons.forEach((button) =>
    button.addEventListener('click', () => addNumber(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
)

equals.addEventListener('click', evaluate)

clearer.addEventListener('click', clear)

deleter.addEventListener('click', deleteInput)