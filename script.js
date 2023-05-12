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
// completes an event
start.addEventListener('click', startGame)
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}
// sets the time between flashing colours
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
// runs the computer choice sequence checks against random colour array
const playSequence = async () => {
  for (let i = 0; i < botSequence.length; i++) {
    flashColor(botSequence[i])
    await sleep(1000)
  }
}

const nextLevel = async () => {
  await sleep(1000)
  const newColor = getRandomColor()
  botSequence.push(newColor)
  userSequence = []
  playSequence()
  start.innerHTML = `<h2>Level ${level}</h2>`
}
// compares user sequence to computer sequence
const checkSequence = () => {
  userSequence.forEach((ele, index) => {
    if (!(ele === botSequence[index])) {
      start.innerHTML = '<h2>Game Over </h2>'
    }
  })
  if (userSequence.every((color, index) => color === botSequence[index])) {
    level++
    nextLevel()
  }
}
// determines next level or game over
const handleClick = (event) => {
  const clickedColor = event.target.id
  userSequence.push(clickedColor)
  if (botSequence.length === userSequence.length) {
    checkSequence()
  } else if (userSequence.length > botSequence.length) {
    start.innerHTML = '<h2>Game Over</h2>'
  }
}
// event listener for click input
sections.forEach((section) => {
  section.addEventListener('click', handleClick)
})
