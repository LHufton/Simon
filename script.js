const colors = ['yellow', 'blue', 'green', 'red']
const sections = document.querySelectorAll('.section')
const middle = document.getElementById('middle')
let botSequence = []
let userSequence = []
let level = 1

document.getElementById('middle').innerHTML = 'Click to Start'

function startGame() {
  addEventListener('click', startGame)
  botSequence = []
  userSequence = []
  level = 1
  nextLevel()
}

const nextLevel = () => {
  const newColor = getRandomColor()
  botSequence.push(newColor)
  userSequence = []
  playSequence()
}

const playSequence = () => {
  for (i = 0; i < colors.length; i ++)
}

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const checkSequence = () => {
  if (userSequence === botSequence) {
    return nextLevel()
  } else {
    document.getElementById('middle').innerHTML = 'Game Over'
  }
}
