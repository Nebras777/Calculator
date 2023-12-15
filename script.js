let input1 = ''
let input2 = ''
let operator = ''

const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const deleter = document.getElementById('delete')
const clearer = document.getElementById('clear')
const equals = document.getElementsByClassName('equals')
const topInput = document.getElementById('past-input')
const bottomInput = document.getElementById('current-input')

function addNumber(number) {
    if (bottomInput.textContent === '0') {
        bottomInput.textContent = null
    }
    bottomInput.textContent += number
}

numberButtons.forEach((button) =>
    button.addEventListener('click', () => addNumber(button.textContent))
)


