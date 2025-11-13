let count = 0


let interval



const handleClick = () => {
  alert("Hello World")

}

const sum = document.getElementById('sum')

const startBtn = document.getElementById('Start')
const stopBtn = document.getElementById('Stop')

const clearBtn = document.getElementById('Clear')

startBtn.onclick = () => {
  if (!interval) {
    interval = setInterval(() => {
      count++
      sum.textContent = count


      // Меняем фон в зависимости от count
      if (count === 5) {
        document.body.style.backgroundColor = '#4B0082'

        
      } else if (count === 10) {
        document.body.style.backgroundColor = '#000000'
      } else if (count === 15) {

        document.body.style.backgroundColor = '#8B0000'
      } else if (count === 20) {


        document.body.style.backgroundColor = '#808080'
      }

    }, 1000)
  }
}



stopBtn.onclick = () => {
  clearInterval(interval)

  interval = null
}

clearBtn.onclick = () => {

  clearInterval(interval)
  interval = null

  count = 0
  sum.textContent = count

  document.body.style.backgroundColor
};
