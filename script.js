const colors = ['yellow', 'blue', 'green', 'red']
const sections = document.querySelectorAll('.section')
const start = document.getElementById('start')
let botSequence = []
let userSequence = []
let level = 1
let highScore = 0

start.innerHTML = 'Click to Start'

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const startGame = () => {
  botSequence = []
  userSequence = []
  level = 1
  nextLevel()
}

start.addEventListener('click', startGame)
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const flashColor = async (color) => {
  let activeSection = null
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id === color) {
      activeSection = sections[i]
      activeSection.classList.add('active')
      await sleep(600)
      activeSection.classList.remove('active')
    }
  }
}

const playSequence = async () => {
  for (let i = 0; i < botSequence.length; i++) {
    flashColor(botSequence[i])
    await sleep(1000)
  }
}
const updateHighScore = () => {
  if (level > highScore) {
    highScore = level
    document.getElementById('high-score').innerText = `High Score: ${highScore}`
  }
}
const nextLevel = async () => {
  await sleep(1000)
  const newColor = getRandomColor()
  botSequence.push(newColor)
  userSequence = []
  playSequence()
  start.innerHTML = `<h2>Level ${level}</h2>`

  // Update the high score
  if (level - 1 > highScore) {
    highScore = level - 1
    updateHighScore()
  }
}

const checkSequence = () => {
  userSequence.forEach((ele, index) => {
    if (!(ele === botSequence[index])) {
      start.innerHTML = '<h2>Game Over </h2>'
      if (level - 1 > highScore) {
        highScore = level - 1 // Update the high score
        updateHighScore() // Call the function to update the high score on the page
      }
    }
  })
  if (userSequence.every((color, index) => color === botSequence[index])) {
    level++
    nextLevel()
  }
}

const handleClick = (event) => {
  const clickedColor = event.target.id
  userSequence.push(clickedColor)
  if (botSequence.length === userSequence.length) {
    checkSequence()
  } else if (userSequence.length > botSequence.length) {
    start.innerHTML = '<h2>Game Over</h2>'
  }
}

sections.forEach((section) => {
  section.addEventListener('click', handleClick)
})
