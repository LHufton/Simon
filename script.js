const colors = ['yellow', 'blue', 'green', 'red']
const sections = document.querySelectorAll('.section')
const middle = document.getElementById('middle')
let botSequence = []
let userSequence = []
let level = 1

const messageEl = document.querySelector('h1')

const startGame = () => {
  addEventListener('click', startGame)
  botSequence = []
  userSequence = []
  level = 1
  nextRound()
}

// https://www.w3schools.com/js/js_random.asp
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
