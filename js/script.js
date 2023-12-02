// Elements
const startBtn = document.querySelector("#start-btn")
const pauseBtn = document.querySelector("#pause-btn")
const continueBtn = document.querySelector("#continue-btn")
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")

// Var
let focusMinutes = 25
let focusSeconds = 0
let count = 0
let isPaused = false

// Start to countdown
function startCountdown(){
    // start
    interval = setInterval(() => {
        if(!isPaused){
            focusSeconds--
            if(focusSeconds < 0){
                focusMinutes--
                focusSeconds = 59
            }
            minutesEl.textContent = formatTime(focusMinutes)
            secondsEl.textContent = formatTime(focusSeconds)
            if(focusMinutes === 0 && focusSeconds < 2 && isEven(count) === false){
                count++
                focusMinutes = 25
                focusSeconds = 0
                minutesEl.textContent = formatTime(focusMinutes)
                secondsEl.textContent = formatTime(focusSeconds)
                clearInterval(interval)
            } else if(focusMinutes === 0 && focusSeconds < 2 && isEven(count)){
                count++
                focusMinutes = 5
                focusSeconds = 0
                minutesEl.textContent = formatTime(focusMinutes)
                secondsEl.textContent = formatTime(focusSeconds)
                clearInterval(interval)
            } else if(focusMinutes === 0 && focusSeconds < 2 && isSevenMultiple(count)){
                count++
                focusMinutes = 15
                focusSeconds = 0
                minutesEl.textContent = formatTime(focusMinutes)
                secondsEl.textContent = formatTime(focusSeconds)
                clearInterval(interval)
            }
        }
    }, 1000)
}

function isSevenMultiple(number){
    return number % 7 === 0 ? true : false
}

function isEven(number){
    return number % 2 === 0 ? true : false
}

// Format time
function formatTime(time){
    return time < 10 ? "0"+time : time
}

// Events
startBtn.addEventListener("click", () => {
    startCountdown()

    startBtn.style.display = "none"
    pauseBtn.style.display = "flex"
})

pauseBtn.addEventListener("click", () => {
    isPaused = true

    continueBtn.style.display = "flex"
    pauseBtn.style.display = "none"
})

continueBtn.addEventListener("click", () => {
    isPaused = false

    continueBtn.style.display = "none"
    pauseBtn.style.display = "flex"
})