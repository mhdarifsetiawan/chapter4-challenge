const xClass = 'x'
const oClass = 'o'
const winningCondition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
]
const boxElements = document.querySelectorAll('.box')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winning-message-text')

let oTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  oTurn = false
  boxElements.forEach(box => {
    box.classList.remove(xClass)
    box.classList.remove(oClass)
    box.removeEventListener('click', handleClick)
    box.addEventListener('click', handleClick, { once: true })
    winningMessageElement.classList.remove('show')
  })
}

function handleClick(e) {
  const box = e.target
  const currentClass = oTurn ? oClass : xClass
  placeMark(box, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    function swapTurns() {
        oTurn = !oTurn
      }
      swapTurns()
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.className = "winning-message-color-seri"
    winningMessageTextElement.innerText = "Seri!"
  } else {
    winningMessageTextElement.className = `${oTurn ? "winning-message-color-o" : "winning-message-color-x"}`
    winningMessageTextElement.innerText = `${oTurn ? "O" : "X"} Menang!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...boxElements].every(box => {
    return box.classList.contains(xClass) || box.classList.contains(oClass)
  })
}

function placeMark(box, currentClass) {
  box.classList.add(currentClass)
}

function checkWin(currentClass) {
  return winningCondition.some(combination => {
    return combination.every(index => {
      return boxElements[index].classList.contains(currentClass)
    })
  })
}

