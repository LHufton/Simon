const colors = ['yellow', 'blue', 'green', 'red']
const sections = document.querySelectorAll('.section')
const middle = document.getElementById('middle')
let botSequence = []
let userSequence = []
let level = 1

const startButton = document.getElementById('Start')
startButton.addEventListener('click', () => {
  cells.forEach((cell) => {
    cell.innerHTML = ''
  })},

function startGame() {
  addEventListener('click', startGame)
  botSequence = []
  userSequence = []
  level = 1
  nextRound()
},
// https://www.w3schools.com/js/js_random.asp
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
