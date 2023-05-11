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
  // sections.forEach((section) => {
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

// New function to check user input
// Create a userSequence function

const nextLevel = async () => {
  await sleep(1000)
  const newColor = getRandomColor()
  botSequence.push(newColor)
  console.log(botSequence)
  userSequence = []
  playSequence()
  start.innerHTML = `<h2>Level ${level}</h2>`
}

const checkSequence = () => {
  userSequence.forEach((ele, index) => {
    if (!(ele === botSequence[index])) {
      start.innerHTML = '<h2>Game Over</h2>'
    }
  })
  if (userSequence.every((color, index) => color === botSequence[index])) {
    level++
    nextLevel()
  }
}
const handleClick = (event) => {
  console.log('userClicked')
  const clickedColor = event.target.id
  userSequence.push(clickedColor)
  console.log(userSequence)
  console.log(botSequence)
  if (botSequence.length === userSequence.length) {
    console.log('checkingSequence')
    checkSequence()
  } else if (userSequence.length > botSequence.length) {
    start.innerHTML = '<h2>Game Over</h2>'
  }
}
sections.forEach((section) => {
  console.log(section)
  section.addEventListener('click', handleClick)
})
