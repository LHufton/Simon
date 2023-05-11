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
  let activeSection = null
  sections.forEach((section) => {
    if (section.id === color) {
      activeSection = section
    }
  })
  console.log(activeSection)
  activeSection.classList.add('active')
  setTimeout(() => {
    activeSection.classList.remove('active')
  }, 1000)
}

const playSequence = () => {
  botSequence.forEach((color) => {
    flashColor(color)
  })
  // const interval = setInterval(() => {
  //   if (index >= botSequence.length) {
  //     clearInterval(interval)
  //   }
  // }, 500)

  // const interval = setInterval(() => {
  //   index++
  //   if (index >= botSequence.length) {
  //     clearInterval(interval)
  //   }
  // }, 600)
}

const nextLevel = () => {
  const newColor = getRandomColor()
  botSequence.push(newColor)
  userSequence = []
  playSequence()
  start.innerHTML = `<h2>Level ${level}</h2>`
  console.log(botSequence)
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
  if (botSequence.length === userSequence.length) {
    checkSequence()
  }
}
// at the end of each turn, reset user sequence.
if (!checkSequence()) {
  start.innerHTML = '<h2>Game Over</h2>'
  setTimeout(() => {
    sequence = []
    startGame()
  }, 2000)
}
// Create a userSequence function
//
