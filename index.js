// make 6 buttons(3-3)
// make 2 sections to display score board
// 


let homeCount = 0
let guestCount = 0
let homeCountEl = document.getElementById("homeCount-el")
let guestCountEl = document.getElementById("guestCount-el")

function homeInc1() {
    homeCount += 1
    homeCountEl.textContent = homeCount
}

function homeInc2() {
    homeCount += 2
    homeCountEl.textContent = homeCount
}

function homeInc3() {
    homeCount += 3
    homeCountEl.textContent = homeCount
}

function guestInc1() {
    guestCount += 1
    guestCountEl.textContent = guestCount
}

function guestInc2() {
    guestCount += 2
    guestCountEl.textContent = guestCount
}

function guestInc3() {
    guestCount += 3
    guestCountEl.textContent = guestCount
}