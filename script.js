console.log('js connected')
const colors = ['yellow', 'blue', 'green', 'red']
const sections = document.querySelectorAll('.section')
const start = document.getElementById('start')
let botSequence = []
let userSequence = []
let level = 1

start.innerHTML = 'Click to Start'

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const startGame = () => {
  addEventListener('click', startGame)
  botSequence = []
  userSequence = []
  level = 1
  nextLevel()
}
start.addEventListener('click', startGame)
const flashColor = (color) => {
  const section = document.getElementById(color)
  section.classList.add('active')
  setTimeout(() => {
    section.classList.remove('active')
  }, 300)
}
const interval = ' '
const playSequence = (botSequence) => {
  let index = 0
  const interval = setInterval(() => {
    flashColor(botSequence[index])
    index++
    if (index >= botSequence.length) {
      clearInterval(interval)
    }
  }, 600)
}

function nextLevel() {
  const newColor = getRandomColor()
  botSequence.push(newColor)
  userSequence = []
  playSequence(botSequence)
  middle.innerHTML = `<h1>Level ${level}</h1>`
}

const checkSequence = () => {
  for (let i = 0; i < userSequence.length; i++) {
    if (userSequence[i] !== botSequence[i]) {
      return false
    }
  }
  return true
}
console.log(checkSequence())

function handleClick(evt) {
  const clickedColor = evt.target.id
  userSequence.push(clickedColor)
  lightUp(clickedColor)
}

if (!checkSequence()) {
  middle.innerHTML = '<h1>Game Over</h1>'
  setTimeout(() => {
    sequence = []
    startGame()
  }, 2000)
  return
}
