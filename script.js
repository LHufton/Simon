const colors = ['yellow', 'blue', 'green', 'red']
const sections = document.querySelectorAll('.section')
const middle = document.getElementById('middle')
let botSequence = []
let userSequence = []
let level = 1

document.getElementById('middle').innerHTML = 'Click to Start'
middle.addEventListener('click', startGame)

const startGame = () => {
  addEventListener('click', startGame)
  botSequence = []
  userSequence = []
  level = 1
  nextLevel()
}

const flashColor = (color) => {
  const section = document.getElementById(color)
  section.classList.add('active')
  setTimeout(() => {
    section.classList.remove('active')
    section.style.boxShadow = ''
  }, 300)
}

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

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const checkSequence = () => {
  for (let i = 0; i < userSequence.length; i++) {
    if (userSequence[i] !== botSequence[i]) {
      return false;
    }
  }
    return nextLevel()
  } else {
    document.getElementById('middle').innerHTML = 'Game Over'
  }

